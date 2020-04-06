FROM ubuntu

WORKDIR /usr/src/app

## install requirements
RUN rm -rf /var/lib/apt/list/* && apt-get update && apt-get install nodejs npm python3 nginx -y

## copy files
COPY . .
RUN ls -la

## Nginx setup
COPY nginx.conf /etc/nginx/nginx.conf

## Install Bot requirement
RUN yarn intall

RUN ["chmod", "+x", "./buildcommand.sh"]
RUN ["sh", "./buildcommand.sh"]

RUN yarn build

RUN ls -la
RUN ls -la built

EXPOSE 80

CMD ["nginx", "-c", "/etc/nginx/nginx.conf"]
ENTRYPOINT ["npm", "run", "start-js"]