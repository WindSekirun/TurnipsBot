import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/BotCommand';
import { bot } from '../core/Bot';
import * as messages from '../json/Message.json';
import '../core/ext/String';

export class Start extends BotCommand {
  matchRegex: RegExp = /\/start/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    let returnMessage = messages.start_result
    bot.sendMessage(message.chat.id, returnMessage)
  }
}
