// DO NOT MODIFY IT MANUALLY.
// commands.ts file is generated for each run.

import TelegramBot = require('node-telegram-bot-api')
import { Start } from '../command/start';
 
export function onText(bot: TelegramBot) {
    new Start().textMatch(bot);
}
