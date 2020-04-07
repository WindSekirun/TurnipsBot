import TelegramBot = require('node-telegram-bot-api');

export class SendMessageOptions implements TelegramBot.SendMessageOptions {
  reply_to_message_id?: number;
  reply_markup?:
    | TelegramBot.InlineKeyboardMarkup
    | TelegramBot.ReplyKeyboardMarkup
    | TelegramBot.ReplyKeyboardRemove
    | TelegramBot.ForceReply;
}

export class InlineKeyboardMarkup implements TelegramBot.InlineKeyboardMarkup {
  inline_keyboard: TelegramBot.InlineKeyboardButton[][] = [];
}

export class InlineKeyboardButton implements TelegramBot.InlineKeyboardButton {
  text: string = '';
  url?: string;
  callback_data?: string;
  switch_inline_query?: string;
  switch_inline_query_current_chat?: string;
  callback_game?: object;
  pay?: boolean;
}

export class EditMessageReplyMarkupOptions implements TelegramBot.EditMessageReplyMarkupOptions {
  chat_id?: number | string;
  message_id?: number;
  inline_message_id?: string;
}

export class ReplyKeyboardMarkup implements TelegramBot.ReplyKeyboardMarkup {
  keyboard: KeyboardButton[][] = [];
  resize_keyboard?: boolean;
  one_time_keyboard?: boolean;
  selective?: boolean;
}

export class KeyboardButton implements TelegramBot.KeyboardButton {
  text: string = '';
  request_contact?: boolean;
  request_location?: boolean;
}

export function makeButton(text: string, callback_data: string) {
  let button = new InlineKeyboardButton();
  button.text = text;
  button.callback_data = callback_data;
  return button;
}

export function addInlineKeyboard(...buttons: InlineKeyboardButton[]) {
  let markup = new InlineKeyboardMarkup();
  markup.inline_keyboard = [];
  markup.inline_keyboard.push(buttons);
  return markup;
}