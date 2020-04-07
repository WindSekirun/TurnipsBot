import schedule from 'node-schedule';
import TelegramBot = require('node-telegram-bot-api');
import { TurnipsDb } from './TurnipsDb';
import * as messages from '../json/message.json';

export class NotifySchedule {
  scheduleJob(bot: TelegramBot): schedule.Job[] {
    const sundayBuyJob = schedule.scheduleJob({ hour: 10, minute: 0, dayOfWeek: 0, tz: "Asia/Seoul"  }, () => this.sendSundayBuy(bot));
    const sundayRecordJob = schedule.scheduleJob({ hour: 14, minute: 0, dayOfWeek: 0, tz: "Asia/Seoul"  }, () => this.sendSundayRecord(bot));
    const mon1Job = schedule.scheduleJob({ hour: 10, minute: 0, dayOfWeek: 1, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot));
    const mon2Job = schedule.scheduleJob({ hour: 14, minute: 0, dayOfWeek: 1, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot));
    const tue1Job = schedule.scheduleJob({ hour: 10, minute: 0, dayOfWeek: 2, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot));
    const tue2Job = schedule.scheduleJob({ hour: 14, minute: 0, dayOfWeek: 2, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot));
    const wed1Job = schedule.scheduleJob({ hour: 10, minute: 0, dayOfWeek: 3, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot));
    const wed2Job = schedule.scheduleJob({ hour: 14, minute: 0, dayOfWeek: 3, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot));
    const thu1Job = schedule.scheduleJob({ hour: 10, minute: 0, dayOfWeek: 4, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot));
    const thu2Job = schedule.scheduleJob({ hour: 14, minute: 0, dayOfWeek: 4, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot));
    const fri1Job = schedule.scheduleJob({ hour: 10, minute: 0, dayOfWeek: 5, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot));
    const fri2Job = schedule.scheduleJob({ hour: 14, minute: 0, dayOfWeek: 5, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot, true));
    const sat1Job = schedule.scheduleJob({ hour: 10, minute: 0, dayOfWeek: 6, tz: "Asia/Seoul"  }, () => this.sendTurnipPrice(bot, true));
    const sat2Job = schedule.scheduleJob({ hour: 14, minute: 0, dayOfWeek: 6, tz: "Asia/Seoul" }, () => this.sendTurnipPrice(bot, true));

    console.log('Scheduled job!')
    
    let jobArray: schedule.Job[] = [sundayBuyJob, sundayRecordJob, mon1Job, mon2Job, tue1Job, tue2Job, wed1Job, wed2Job, thu1Job, thu2Job, fri1Job, fri2Job, sat1Job, sat2Job]
    return jobArray
  }

  private async sendTurnipPrice(bot: TelegramBot, must: boolean = false) {
    let returnMessage = messages.notify_turnip_price;
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
