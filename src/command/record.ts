import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/botcommand';
import { bot } from '../core/bot';
import * as messages from '../json/message.json';
import { TurnipsDb } from './../core/TurnipsDb';
import { ControlResult } from './../core/ControlResult';
import * as Keyboard from '../core/Keyboard';
import '../core/ext/string';
import { RecordKind } from '../core/model/RecordKind';

class RecordCallbackQuery {
  k: RecordKind = RecordKind.MON_AM;
  u: string = '';
  c: number = 0;
  p: string = '';
  e: boolean = false;

  constructor(kind: RecordKind, uid: string, cid: number, price: string, enabled: boolean) {
    this.k = kind;
    this.u = uid;
    this.c = cid;
    this.p = price;
    this.e = enabled;
  }
}

export class Record extends BotCommand {
  matchRegex: RegExp = /\/record ([0-9]+)/;
  onceListener = async (query: TelegramBot.CallbackQuery) => {
    if (query.data == null) return;

    let callbackQuery: RecordCallbackQuery = JSON.parse(query.data);
    if (callbackQuery != undefined) {
      let db = await TurnipsDb.getInstance();
      let uid = callbackQuery.u;
      let cid = callbackQuery.c;
      let kind = callbackQuery.k;
      let price = callbackQuery.p;
      let enabled = callbackQuery.e;

      if (!enabled) {
        // remove message when received callback query
        if (query.message?.message_id != undefined) {
          await bot.deleteMessage(cid, query.message?.message_id + '');
        }
        return;
      }

      await db.recordBell(uid, kind, price);
      let recordString = await db.getRecordString(uid);
      let controlResult = new ControlResult();
      controlResult.generateResultFile(uid, recordString);
      let fileUrl = controlResult.getUrl(uid);

      // Keyboard object 구성
      let options = new Keyboard.SendMessageOptions();
      let button = new Keyboard.InlineKeyboardButton();
      button.text = messages.result_btn;
      button.url = fileUrl;
      let buttonArray: Keyboard.InlineKeyboardButton[] = [button];
      let markup = new Keyboard.InlineKeyboardMarkup();
      markup.inline_keyboard = [];
      markup.inline_keyboard.push(buttonArray);
      options.reply_markup = markup;

      // 사용자 반환
      let returnMessage = messages.record_result.format(kind, price);
      bot.sendMessage(cid, returnMessage, options);
      console.log(`User ${uid} Record turnips by ${price} in ${kind}, recordString: ${recordString}`);

      // remove message when received callback query
      if (query.message?.message_id != undefined) {
        await bot.deleteMessage(cid, query.message?.message_id + '');
      }
    }
  };

  private generateButton(item: RecordKind, userId: string, chatId: number, price: string, enabled: boolean): Keyboard.InlineKeyboardButton {
    let button = new Keyboard.InlineKeyboardButton();
    button.text = item;
    button.callback_data = JSON.stringify(new RecordCallbackQuery(item, userId, chatId, price, enabled));
    return button;
  }

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    let db = await TurnipsDb.getInstance();
    let userName = (message?.from?.username || message?.from?.first_name) ?? '';
    let userId = message?.from?.id + '';
    let chatId = message.chat.id;

    // 유저가 존재하는지 체크
    let existsUser = await db.existsUser(userId);
    if (!existsUser) {
      let returnMessage = messages.fail_non_exists.format(userName);
      bot.sendMessage(chatId, returnMessage);
      return;
    }

    // 이번주 레코드가 있는지 체크
    let existsRecord = await db.existsRecord(userId);
    if (!existsRecord) {
      let returnMessage = messages.record_fail_non_exists.format(userName);
      bot.sendMessage(chatId, returnMessage);
      return;
    }

    let price = match[1];

    // Kind를 선택하기 위해 키보드를 구성
    let cancelButon = new Keyboard.InlineKeyboardButton();
    cancelButon.text = '취소하기';
    cancelButon.callback_data = JSON.stringify(new RecordCallbackQuery(RecordKind.NONE, userId, chatId, price, false));

    let options = new Keyboard.SendMessageOptions();
    let buttonArray: Keyboard.InlineKeyboardButton[] = [];
    let markup = new Keyboard.InlineKeyboardMarkup();
    markup.inline_keyboard = [];
    markup.inline_keyboard.push([
      this.generateButton(RecordKind.MON_AM, userId, chatId, price, true),
      this.generateButton(RecordKind.MON_PM, userId, chatId, price, true),
    ]);
    markup.inline_keyboard.push([
      this.generateButton(RecordKind.TUE_AM, userId, chatId, price, true),
      this.generateButton(RecordKind.TUE_PM, userId, chatId, price, true),
    ]);
    markup.inline_keyboard.push([
      this.generateButton(RecordKind.WED_AM, userId, chatId, price, true),
      this.generateButton(RecordKind.WED_PM, userId, chatId, price, true),
    ]);
    markup.inline_keyboard.push([
      this.generateButton(RecordKind.THU_AM, userId, chatId, price, true),
      this.generateButton(RecordKind.THU_PM, userId, chatId, price, true),
    ]);
    markup.inline_keyboard.push([
      this.generateButton(RecordKind.FRI_AM, userId, chatId, price, true),
      this.generateButton(RecordKind.FRI_PM, userId, chatId, price, true),
    ]);
    markup.inline_keyboard.push([
      this.generateButton(RecordKind.SAT_AM, userId, chatId, price, true),
      this.generateButton(RecordKind.SAT_PM, userId, chatId, price, true),
    ]);
    markup.inline_keyboard.push([cancelButon]);

    markup.inline_keyboard.push(buttonArray);
    options.reply_markup = markup;
    options.reply_to_message_id = message.message_id;

    // callback_query 신호 추적
    bot.once('callback_query', this.onceListener);

    let returnMessage = messages.record_select_date.format(price);
    bot.sendMessage(chatId, returnMessage, options);
  }
}
