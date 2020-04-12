import ON_DEATH from 'death';
import path from 'path';
import ncp from 'ncp';
import * as bot from './core/bot';
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
    jobArray.forEach((item) => item.cancel());
  });

  ncp(path.resolve(__dirname, '../public'), path.resolve(__dirname, '../data'), (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Copyed public to data ")
  })
}

startTurnipsBot();
