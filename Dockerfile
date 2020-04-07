FROM ubuntu

WORKDIR /usr/src/app
ENV TELEGRAM_TOKEN ""
ENV WEB_URL "http://localhost:8081"

## install requirements
RUN rm -rf /var/lib/apt/list/* && apt-get update && apt-get install curl nano -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN rm -rf /var/lib/apt/list/* && apt-get update && apt-get install nodejs python3 nginx -y

## copy files
COPY . .
RUN ls -la
RUN ls -la /usr/src/app/data/result

## Nginx setup
COPY nginx.conf /etc/nginx/nginx.conf
COPY home.conf /etc/nginx/conf.d/home.conf

## Install Bot requirement
RUN npm install -g yarn
RUN yarn install

RUN ["chmod", "+x", "./buildcommand.sh"]
RUN ["sh", "./buildcommand.sh"]

RUN yarn build

EXPOSE 80

CMD ["nginx", "-c", "/etc/nginx/nginx.conf"]
ENTRYPOINT ["yarn", "start-js"]