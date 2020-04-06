import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/BotCommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/String';

export class Notify extends BotCommand {
  matchRegex: RegExp = /\/notify/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    console.log(message);
  }
}
