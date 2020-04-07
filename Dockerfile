FROM ubuntu

WORKDIR /usr/src/app

ENV TELEGRAM_TOKEN ""
ENV WEB_URL "http://turnips.uzuki.live"
EXPOSE 80

## install requirements
RUN rm -rf /var/lib/apt/list/* && apt-get update && apt-get install nodejs npm python3 curl wget nano nginx -y

## copy files
COPY . .
COPY nginx.conf /etc/nginx/nginx.conf
COPY home.conf /etc/nginx/conf.d/home.conf

RUN npm install

RUN ["chmod", "+x", "./buildcommand.sh"]
RUN ["sh", "./buildcommand.sh"]
RUN ["chmod", "+x", "./entrypoint.sh"]

RUN npm run build

ENTRYPOINT ["sh", "./entrypoint.sh"]