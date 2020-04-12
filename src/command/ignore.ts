import TelegramBot = require("node-telegram-bot-api");
import { BotCommand } from "../core/botcommand";
import { bot } from "../core/bot";
import * as messages from "../json/message.json";
import "../core/ext/string";
import { TurnipsDb } from "./../core/TurnipsDb";

export class Ignore extends BotCommand {
  matchRegex: RegExp = /\/ignore/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    let db = await TurnipsDb.getInstance();
    let userName = (message?.from?.username || message?.from?.first_name) ?? "";
    let userId = message?.from?.id + "";
    let chatId = message.chat.id;

    // 유저가 존재하는지 체크
    let exists = await db.existsUser(userId);
    if (!exists) {
      let returnMessage = messages.fail_non_exists.format(userName);
      bot.sendMessage(chatId, returnMessage);
      return;
    }

    let existsIgnoreRecordDate = await db.existsIgnoreRecordDate(userId);
    if (existsIgnoreRecordDate) {
      await db.removeIgnoreRecordDate(userId);
      let returnMessage = messages.ignore_remove;
      bot.sendMessage(chatId, returnMessage);
    } else {
      await db.ignoreRecordDate(userId);
      let returnMessage = messages.ignore_add;
      bot.sendMessage(chatId, returnMessage);
    }

    console.log(`User ${userId} changed ignoreRecordDate to ${!existsIgnoreRecordDate}`);
  }
}