FROM node:12-alpine

VOLUME /usr/src/app
WORKDIR /usr/src/app

ENV TELEGRAM_TOKEN ""
ENV WEB_URL "http://localhost:8081"
EXPOSE 80

## install requirements
RUN apk update
RUN apk add curl nano python3 nginx busybox bash

## copy files
COPY . .

## Nginx setup
COPY nginx.conf /etc/nginx/nginx.conf
COPY home.conf /etc/nginx/conf.d/home.conf

## Install Bot requirement
RUN npm install

RUN ls -la
RUN npm run build

CMD ["nginx", "-c", "/etc/nginx/nginx.conf"]
ENTRYPOINT ["npm", "run", "start-js"]