import TelegramBot = require('node-telegram-bot-api');
import { BotCommand } from '../core/botcommand';
import { bot } from '../core/Bot';
import * as messages from '../json/Message.json';
import * as Keyboard from '../core/Keyboard';
import '../core/ext/string';

export class Help extends BotCommand {
  matchRegex: RegExp = /\/help/;

  async onMatch(message: TelegramBot.Message, match: RegExpMatchArray): Promise<void> {
    // Keyboard object 구성
    let options = new Keyboard.SendMessageOptions();
    let button = new Keyboard.InlineKeyboardButton();
    button.text = messages.help_btn;
    button.url = 'https://windsekirun.github.io/TurnipsBot/help.html';
    let buttonArray: Keyboard.InlineKeyboardButton[] = [button];
    let markup = new Keyboard.InlineKeyboardMarkup();
    markup.inline_keyboard = [];
    markup.inline_keyboard.push(buttonArray);
    options.reply_markup = markup;

    let returnMessage = messages.help_result
    bot.sendMessage(message.chat.id, returnMessage, options)
  }
}
