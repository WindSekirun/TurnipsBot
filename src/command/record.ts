import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/Botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/String';

export class Record extends BotCommand {
  matchRegex: RegExp = /\/Record ([0-9]+)/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    console.log(message);
  }
}