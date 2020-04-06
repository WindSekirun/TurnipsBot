import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/String';

export class Help extends BotCommand {
  matchRegex: RegExp = /\/help/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    console.log(message);
  }
}
