import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/String';

export class BuyHelp extends BotCommand {
  matchRegex: RegExp = /\/buy/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    let returnMessage = messages.buy_fail_non_parameter;
    bot.sendMessage(message.chat.id, returnMessage);
  }
}
