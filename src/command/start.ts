import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/Botcommand';
import { bot } from '../core/bot';
import '../core/ext/String';

export class Start extends BotCommand {
  matchRegex: RegExp = /\/start/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    console.log(message);
  }
}
