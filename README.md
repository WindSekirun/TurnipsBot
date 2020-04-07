# TurnipsBot

Turnips Bot for Animal Crossing New Horizon

## Build

1. `touch .env`
2. `echo 'TELEGRAM_TOKEN=<YOUR_TOKEN>' > .env`
3. `yarn install`
4. `runlocal.sh`

## Docker

### Compose

```yaml
version: '2'

services:
  turnipsbot:
    <!-- build:
      context: .
      dockerfile: ./Dockerfile -->
    image: windsekirun/turnipsbot
    container_name: "TurnipsBot"
    ports:
      - "8080:80"
    volumes:
      - "<path>:/usr/src/app/data"
    environment:
      - TELEGRAM_TOKEN=
```

## Usages

for Usages, Please visit [https://windsekirun.github.io/TurnipsBot/help.html](https://windsekirun.github.io/TurnipsBot/help.html)

## License

MIT License