import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/BotCommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import '../core/ext/String';
import { TurnipsDb } from './../core/TurnipsDb';
import { ControlResult } from './../core/ControlResult';
import * as Keyboard from '../core/Keyboard';

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
      bot.sendMessage(chatId, returnMessage);
      return;
    }

    // 구매 가격 레코드
    let record = await db.buyTurnips(userId, match[1]);
    let recordString = await db.getRecordString(userId);
    console.log(recordString)

    // Result 파일 작성하기
    let controlResult = new ControlResult();
    controlResult.generateResultFile(userId, recordString);
    let fileUrl = controlResult.getUrl(userId);

    // Keyboard object 구성
    let options = new Keyboard.SendMessageOptions();
    let button = new Keyboard.InlineKeyboardButton();
    button.text = messages.buy_result_btn;
    button.url = fileUrl;
    let buttonArray: Keyboard.InlineKeyboardButton[] = [button];
    let markup = new Keyboard.InlineKeyboardMarkup();
    markup.inline_keyboard = [];
    markup.inline_keyboard.push(buttonArray);
    options.reply_markup = markup;

    // 사용자 반환
    let returnMessage = messages.buy_result.format(match[1]);
    bot.sendMessage(chatId, returnMessage, options);
  }
}
