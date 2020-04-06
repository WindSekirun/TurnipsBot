// DO NOT MODIFY IT MANUALLY.
// commands.ts file is generated for each run.

import TelegramBot = require('node-telegram-bot-api')
import { Buy } from '../command/Buy';
import { Help } from '../command/Help';
import { Join } from '../command/Join';
import { Leave } from '../command/Leave';
import { Notify } from '../command/Notify';
import { Record } from '../command/Record';
import { Result } from '../command/Result';
import { Start } from '../command/Start';
 
export function onText(bot: TelegramBot) {
    new Buy().textMatch(bot);
    new Help().textMatch(bot);
    new Join().textMatch(bot);
    new Leave().textMatch(bot);
    new Notify().textMatch(bot);
    new Record().textMatch(bot);
    new Result().textMatch(bot);
    new Start().textMatch(bot);
}
