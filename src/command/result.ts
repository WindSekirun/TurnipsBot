import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/string';

export class Result extends BotCommand {
  matchRegex: RegExp = /\/result/;

  onMatch(message: TelegramBot.Message, match: RegExpMatchArray): void {
    console.log(message);
  }
}
