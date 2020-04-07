import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/string';

export class Pattern extends BotCommand {
  matchRegex: RegExp = /\/pattern/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    let returnMessage = messages.pattern_desc
    bot.sendMessage(message.chat.id, returnMessage)
  }
}
