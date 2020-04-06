import * as bot from './core/bot';
import ON_DEATH from 'death';
import { TurnipsDb } from './core/TurnipsDb';

export async function startTurnipsBot() {
  let db = await TurnipsDb.getInstance();
  
  // DB Closing 용도
  ON_DEATH(signal => {
    db.close();
  });

  

  bot.start();
}

startTurnipsBot()