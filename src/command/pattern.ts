import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/botcommand';
import { bot } from '../core/Bot';
import * as messages from '../json/Message.json';
import '../core/ext/string';

export class Pattern extends BotCommand {
  matchRegex: RegExp = /\/pattern/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    let returnMessage = messages.pattern_desc
    bot.sendMessage(message.chat.id, returnMessage)
  }
}
