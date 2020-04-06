import TelegramBot = require('node-telegram-bot-api');
import * as settings from './Env';

export abstract class BotCommand {
  abstract matchRegex: RegExp;

  abstract onMatch(message: TelegramBot.Message, match: RegExpMatchArray | null): void;

  textMatch(bot: TelegramBot): void {
    let matchListener = (message: TelegramBot.Message, matchArray: RegExpMatchArray | null) => {
      if (settings.DEBUG_MODE && settings.LOG_MESSAGE_BODY) {
        console.log(message);
      }

      this.onMatch(message, matchArray);
    };

    bot.onText(this.matchRegex, matchListener);
  }
}
