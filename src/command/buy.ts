import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/Botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/String';
import { TurnipsDb } from './../core/TurnipsDb';

export class Buy extends BotCommand {
  matchRegex: RegExp = /\/buy ([0-9]+)/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    let db = await TurnipsDb.getInstance();
    let userName = (message?.from?.username || message?.from?.first_name) ?? '';
    let userId = message?.from?.id + '';
    let chatId = message.chat.id;

    // 유저가 존재하는지 체크
    let exists = await db.existsUser(userId);
    if (!exists) {
      let returnMessage = messages.fail_non_exists.format(userName);
      bot.sendMessage(chatId, returnMessage)
      return;
    }

    // 구매 가격 레코드
    let record = await db.buyTurnips(userId, match[1]);
    let returnMessage = messages.buy_result.format(match[1]);

    // Result 파일 작성하기
    

    bot.sendMessage(chatId, returnMessage);
  }
}