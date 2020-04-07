import schedule from 'node-schedule';
import TelegramBot = require('node-telegram-bot-api');
import { TurnipsDb } from './TurnipsDb';
import * as messages from '../json/message.json';
import { RecordKind } from './model/RecordKind';

export class NotifySchedule {
  scheduleJob(bot: TelegramBot): schedule.Job[] {
    const sundayBuyJob = schedule.scheduleJob({ hour: 10, minute: 0, dayOfWeek: 0, tz: "Asia/Seoul"  }, () => this.sendSundayBuy(bot));
    const sundayRecordJob = schedule.scheduleJob({ hour: 14, minute: 0, dayOfWeek: 0, tz: "Asia/Seoul"  }, () => this.sendSundayRecord(bot));
    const mon1Job = schedule.scheduleJob({ hour: 10, minute: 0, dayOfWeek: 1, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot, RecordKind.MON_AM));
    const mon2Job = schedule.scheduleJob({ hour: 14, minute: 0, dayOfWeek: 1, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot, RecordKind.MON_PM));
    const tue1Job = schedule.scheduleJob({ hour: 10, minute: 0, dayOfWeek: 2, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot, RecordKind.TUE_AM));
    const tue2Job = schedule.scheduleJob({ hour: 14, minute: 0, dayOfWeek: 2, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot, RecordKind.TUE_PM));
    const wed1Job = schedule.scheduleJob({ hour: 10, minute: 0, dayOfWeek: 3, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot, RecordKind.WED_AM));
    const wed2Job = schedule.scheduleJob({ hour: 14, minute: 0, dayOfWeek: 3, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot, RecordKind.TUE_PM));
    const thu1Job = schedule.scheduleJob({ hour: 10, minute: 0, dayOfWeek: 4, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot, RecordKind.THU_AM));
    const thu2Job = schedule.scheduleJob({ hour: 14, minute: 0, dayOfWeek: 4, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot, RecordKind.THU_PM));
    const fri1Job = schedule.scheduleJob({ hour: 10, minute: 0, dayOfWeek: 5, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot, RecordKind.FRI_AM));
    const fri2Job = schedule.scheduleJob({ hour: 14, minute: 0, dayOfWeek: 5, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot, RecordKind.FRI_PM, true));
    const sat1Job = schedule.scheduleJob({ hour: 10, minute: 0, dayOfWeek: 6, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot, RecordKind.SAT_AM, true));
    const sat2Job = schedule.scheduleJob({ hour: 14, minute: 0, dayOfWeek: 6, tz: "Asia/Seoul" }, () => this.sendTurnipPrice(bot, RecordKind.SAT_PM, true));

    console.log('Scheduled job!')
    
    let jobArray: schedule.Job[] = [sundayBuyJob, sundayRecordJob, mon1Job, mon2Job, tue1Job, tue2Job, wed1Job, wed2Job, thu1Job, thu2Job, fri1Job, fri2Job, sat1Job, sat2Job]
    return jobArray
  }

  private async sendTurnipPrice(bot: TelegramBot, kind: RecordKind, must: boolean = false) {
    let returnMessage = messages.notify_turnip_price.format(kind);
    if (must) {
      returnMessage += '\n' + messages.notify_turnip_must;
    }

    this.sendMessageToNotifyUserList(bot, returnMessage);
  }

  private async sendSundayBuy(bot: TelegramBot) {
    let returnMessage = messages.notify_sunday_buy;
    this.sendMessageToNotifyUserList(bot, returnMessage);
  }

  private async sendSundayRecord(bot: TelegramBot) {
    let returnMessage = messages.notify_sunday_record;
    this.sendMessageToNotifyUserList(bot, returnMessage);
  }

  private async sendMessageToNotifyUserList(bot: TelegramBot, returnMessage: string) {
    console.log(`Notify ${returnMessage} to users!`)
    let userList = await this.getNotifyUserList();
    userList.forEach((item) => {
      bot.sendMessage(item, returnMessage);
    });
  }

  private async getNotifyUserList(): Promise<string[]> {
    let db = await TurnipsDb.getInstance();
    let users = await db.getNotifyUsers();
    return users.map((item) => item.userId);
  }
}
