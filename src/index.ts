import schedule from 'node-schedule';
import ON_DEATH from 'death';
import * as bot from './core/Bot';
import { TurnipsDb } from './core/TurnipsDb';
import { NotifySchedule } from './core/NotifySchedule';

export async function startTurnipsBot() {
  bot.start(); // bot start

  // database initilaize
  let db = await TurnipsDb.getInstance();

  // schedule notify job
  let schedule = new NotifySchedule();
  let jobArray = schedule.scheduleJob(bot.bot);

  // listen SIGINT... etc
  ON_DEATH((signal) => {
    db.close();
    jobArray.forEach(item => item.cancel())
  });
}

startTurnipsBot();
