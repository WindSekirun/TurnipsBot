import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/string';
import { TurnipsDb } from './../core/TurnipsDb';
import { ControlResult } from '../core/ControlResult';

export class Leave extends BotCommand {
  matchRegex: RegExp = /\/leave/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    let db = await TurnipsDb.getInstance();
    let userName = (message?.from?.username || message?.from?.first_name) ?? '';
    let userId = message?.from?.id + '';
    let chatId = message.chat.id;

    let exists = await db.existsUser(userId);
    if (!exists) {
      let returnMessage = messages.fail_non_exists.format(userName);
      bot.sendMessage(chatId, returnMessage);
      return;
    }

    // Result 파일 제거하기
    let controlResult = new ControlResult();
    controlResult.removeResultFile(userId);

    // 유저 & Record 제거하기
    await db.deleteUser(userId);
    let returnMessage = messages.leave_result.format(userName);
    bot.sendMessage(chatId, returnMessage);

    console.log(`Leave User ${userId} - ${userName}`)
  }
}
