import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import { TurnipsDb } from './../core/TurnipsDb';
import '../core/ext/string';

export class Notify extends BotCommand {
  matchRegex: RegExp = /\/notify/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    let db = await TurnipsDb.getInstance();
    let userName = (message?.from?.username || message?.from?.first_name) ?? '';
    let userId = message?.from?.id + '';
    let chatId = message.chat.id;

    // 유저가 존재하는지 체크
    let exists = await db.existsUser(userId);
    if (!exists) {
      let returnMessage = messages.fail_non_exists.format(userName);
      bot.sendMessage(chatId, returnMessage);
      return;
    }

    let nowNotify = await db.isNotifyUser(userId);
    let newNotify = !nowNotify
    await db.setNotifyUser(userId, newNotify);

    let returnMessage = messages.notify_result.format(newNotify ? '사용함' : '사용하지 않음');
    bot.sendMessage(chatId, returnMessage)
  }
}
