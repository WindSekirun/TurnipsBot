import Promise = require('bluebird');
import TelegramBot = require('node-telegram-bot-api');
import * as settings from './env';

require('dotenv').config();

// Enable 'cancellation' into Promise
// https://github.com/yagop/node-telegram-bot-api/issues/319
Promise.config({
  cancellation: true,
});

export let bot = new TelegramBot(process.env.TELEGRAM_TOKEN || "");

export let sendErrorAdmin = (err: Error) => {
  console.log(err);
  bot.sendMessage(settings.ADMIN_USER_ID, `Error! : ${err}`);
};

export function start() {
  console.log('Starting TurnipsBot...');
  bot.startPolling();
}

// Process with error
bot.on('polling_error', (err) => {
  console.log(err);
});

// commands.ts file is generated for each run. Do not modify it manually.
import * as commands from './commands';
commands.onText(bot);
