import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/string';

export class Start extends BotCommand {
  matchRegex: RegExp = /\/start/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    let returnMessage = messages.start_result
    bot.sendMessage(message.chat.id, returnMessage)
  }
}
