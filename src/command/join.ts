import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/String';
import { TurnipsDb } from './../core/TurnipsDb';

export class Join extends BotCommand {
  matchRegex: RegExp = /\/join/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    let db = await TurnipsDb.getInstance();
    let userName = (message?.from?.username || message?.from?.first_name) ?? '';
    let userId = message?.from?.id + '';
    let chatId = message.chat.id;

    let exists = await db.existsUser(userId);
    if (exists) {
      let returnMessage = messages.join_fail_exists.format(userName);
      bot.sendMessage(chatId, returnMessage);
    } else {
      await db.joinUser(userId, userName);
      let returnMessage = messages.join_result.format(userName);
      bot.sendMessage(message.chat.id, returnMessage);
    }
  }
}
