# TurnipsBot

Turnips Bot for Animal Crossing New Horizon

## Install using Docker

```shell
docker run -d -p "8080:80" -e "TELEGRAM_TOKEN=<YOUR_TOKEN>" -e "WEB_URL=http://turnips.uzuki.live" windsekirun/turnipsbot
```

### Compose

```yaml
version: '2'

services:
  turnipsbot:
    image: windsekirun/turnipsbot
    container_name: "turnipsbot"
    ports:
      - "8080:80"
    volumes:
      - "turnips-volume:/usr/src/app/data"
    environment:
      - TELEGRAM_TOKEN=
      - WEB_URL=http://turnips.uzuki.live

volumes:
  turnips-volume:
```

## Usages

for Usages, Please visit [https://windsekirun.github.io/TurnipsBot/help.html](https://windsekirun.github.io/TurnipsBot/help.html)

## Build

1. `echo 'TELEGRAM_TOKEN=<YOUR_TOKEN>' > .env`
2. `yarn install`
3. `sh runlocal.sh`

## License

MIT License