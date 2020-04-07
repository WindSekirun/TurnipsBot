import ON_DEATH from 'death';
import path from 'path';
import fs from 'fs';
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

  // public 파일 복사하기
  const basePath = path.resolve(__dirname, '../public/index.html');
  const dataPath = path.resolve(__dirname, '../data/index.html');
  if (!fs.existsSync(dataPath)) {
    fs.copyFileSync(basePath, dataPath);
  }

  const baseFaviconPath = path.resolve(__dirname, '../public/favicon.ico');
  const dataFaviconPath = path.resolve(__dirname, '../data/favicon.ico');
  if (!fs.existsSync(dataFaviconPath)) {
    fs.copyFileSync(baseFaviconPath, dataFaviconPath);
  }
}

startTurnipsBot();
