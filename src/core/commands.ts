// DO NOT MODIFY IT MANUALLY.
// commands.ts file is generated for each run.

import TelegramBot = require('node-telegram-bot-api')
import { Bug } from '../command/bug';
import { Buy } from '../command/buy';
import { Help } from '../command/help';
import { Join } from '../command/join';
import { Leave } from '../command/leave';
import { Notify } from '../command/notify';
import { Pattern } from '../command/pattern';
import { Record } from '../command/record';
import { Result } from '../command/result';
import { Start } from '../command/start';
 
export function onText(bot: TelegramBot) {
    new Bug().textMatch(bot);
    new Buy().textMatch(bot);
    new Help().textMatch(bot);
    new Join().textMatch(bot);
    new Leave().textMatch(bot);
    new Notify().textMatch(bot);
    new Pattern().textMatch(bot);
    new Record().textMatch(bot);
    new Result().textMatch(bot);
    new Start().textMatch(bot);
}
