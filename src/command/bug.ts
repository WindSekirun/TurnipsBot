import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/string';

export class Bug extends BotCommand {
  matchRegex: RegExp = /\/bug/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    let returnMessage = messages.bug_result;
    bot.sendMessage(message.chat.id, returnMessage);
  }
}
