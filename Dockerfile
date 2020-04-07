FROM ubuntu

VOLUME /usr/src/app
WORKDIR /usr/src/app

ENV TELEGRAM_TOKEN ""
ENV WEB_URL "http://localhost:8081"
EXPOSE 80

## install requirements
RUN rm -rf /var/lib/apt/list/* && apt-get update && apt-get install nodejs npm python3 -y

## copy files
COPY . .
COPY nginx.conf /etc/nginx/nginx.conf
COPY home.conf /etc/nginx/conf.d/home.conf

RUN ls -la

RUN npm install

RUN ["chmod", "+x", "./buildcommand.sh"]
RUN ["sh", "./buildcommand.sh"]

RUN npm run build

RUN ls -la
RUN ls -la built

CMD ["nginx", "-c", "/etc/nginx/nginx.conf"]
ENTRYPOINT ["npm", "run", "start-js"]