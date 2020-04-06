import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/string';

export class Record extends BotCommand {
  matchRegex: RegExp = /\/Record ([0-9]+)/;

  onMatch(message: TelegramBot.Message, match: RegExpMatchArray): void {
    console.log(message);
  }
}
