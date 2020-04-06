import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/string';

export class Buy extends BotCommand {
  matchRegex: RegExp = /\/buy ([0-9]+)/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    console.log(message);
  }
}
