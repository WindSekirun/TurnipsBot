# TurnipsBot

Turnips Bot for Animal Crossing New Horizon

## Build

1. `touch .env`
2. `echo 'TELEGRAM_TOKEN=<YOUR_TOKEN>' > .env`
3. `yarn install`
4. `runlocal.sh`

## Docker

```shell
docker run -d -p "8080:80" -e "TELEGRAM_TOKEN=<YOUR_TOKEN>" -e "WEB_URL=http://localhost:8081" windsekirun/turnipsbot
```

### Compose

```yaml
version: '2'

services:
  turnipsbot:
    image: windsekirun/turnipsbot
    container_name: "TurnipsBot"
    ports:
      - "8080:80"
    volumes:
      - "<path>:/usr/src/app/data"
    environment:
      - TELEGRAM_TOKEN=
      - WEB_URL=
```

## Usages

for Usages, Please visit [https://windsekirun.github.io/TurnipsBot/help.html](https://windsekirun.github.io/TurnipsBot/help.html)

## License

MIT License