import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/Botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/String';

export class Result extends BotCommand {
  matchRegex: RegExp = /\/result/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    console.log(message);
  }
}