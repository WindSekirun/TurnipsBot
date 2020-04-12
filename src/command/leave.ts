import TelegramBot = require("node-telegram-bot-api");
import { BotCommand } from "../core/botcommand";
import { bot } from "../core/bot";
import * as messages from "../json/message.json";
import "../core/ext/string";
import { TurnipsDb } from "./../core/TurnipsDb";
import { ControlResult } from "../core/ControlResult";
import * as Keyboard from '../core/Keyboard';

class LeaveCallbackQuery {
  u: string = "";
  s: number = 0;

  constructor(uid: string, state: boolean) {
    this.u = uid;
    this.s = state ? 1 : 0;
  }
}

export class Leave extends BotCommand {
  matchRegex: RegExp = /\/leave/;

  onceListener = async (query: TelegramBot.CallbackQuery) => {
    if (query.data == null) return;

    let callbackQuery: LeaveCallbackQuery = JSON.parse(query.data);
    if (callbackQuery != undefined) {
      let db = await TurnipsDb.getInstance();
      let uid = callbackQuery.u;
      let state = callbackQuery.s;

      if (state != 1) {
        // remove message when received callback query
        if (query.message?.message_id != undefined) {
          await bot.deleteMessage(uid, query.message?.message_id + "");
        }
        return;
      }

      // Result 파일 제거하기
      let controlResult = new ControlResult();
      controlResult.removeResultFile(uid);

      // 유저 & Record 제거하기
      await db.deleteUser(uid);
      let returnMessage = messages.leave_result;
      bot.sendMessage(uid, returnMessage);

      console.log(`Leave User ${uid}`);

      // remove message when received callback query
      if (query.message?.message_id != undefined) {
        await bot.deleteMessage(uid, query.message?.message_id + "");
      }
    }
  };

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    let db = await TurnipsDb.getInstance();
    let userName = (message?.from?.username || message?.from?.first_name) ?? "";
    let userId = message?.from?.id + "";
    let chatId = message.chat.id;

    let exists = await db.existsUser(userId);
    if (!exists) {
      let returnMessage = messages.fail_non_exists.format(userName);
      bot.sendMessage(chatId, returnMessage);
      return;
    }

    let cancelButon = new Keyboard.InlineKeyboardButton();
    cancelButon.text = messages.select_cancel;
    cancelButon.callback_data = JSON.stringify(new LeaveCallbackQuery(userId, false));
    
    let leaveButton = new Keyboard.InlineKeyboardButton();
    leaveButton.text = messages.leave_button;
    leaveButton.callback_data = JSON.stringify(new LeaveCallbackQuery(userId, true));

    let options = new Keyboard.SendMessageOptions();
    let markup = new Keyboard.InlineKeyboardMarkup();
    markup.inline_keyboard = [];
    markup.inline_keyboard.push([leaveButton]);
    markup.inline_keyboard.push([cancelButon]);

    options.reply_markup = markup;
    options.reply_to_message_id = message.message_id;

    // callback_query 신호 추적
    bot.once('callback_query', this.onceListener);

    let returnMessage = messages.leave_cofirm;
    bot.sendMessage(chatId, returnMessage, options);
  }
}
