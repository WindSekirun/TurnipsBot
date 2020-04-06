FROM ubuntu

WORKDIR /usr/src/app

## install requirements
RUN rm -rf /var/lib/apt/list/* && apt-get update && apt-get install nodejs npm python3 -y

## copy files
COPY . .

RUN ls -la

RUN yarn intall

RUN ["chmod", "+x", "./buildcommand.sh"]
RUN ["sh", "./buildcommand.sh"]

RUN yarn build

RUN ls -la
RUN ls -la built

ENTRYPOINT ["npm", "run", "start-js"]