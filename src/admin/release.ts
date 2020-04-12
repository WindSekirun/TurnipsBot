import { TurnipsDb } from "../core/TurnipsDb";
import moment = require("moment");
import request = require("request-promise-native");
import TelegramBot = require("node-telegram-bot-api");
import * as messages from '../json/message.json';
import '../core/ext/string';

require('dotenv').config();

export async function setRelease() {
   // database initilaize
  let db = await TurnipsDb.getInstance();

  let releaseRequestOptions = {
    uri: 'https://api.github.com/repos/WindSekirun/TurnipsBot/releases',
    method: "GET",
    json: true
  };
  
  let response: Github.Releases[] = await request(releaseRequestOptions);
  response.forEach(release => {
      release.formatted_date = moment(release.created_at).format("YYYMMDD")
  });
  let latest = response.sort((one, two) => (one.formatted_date > two.formatted_date ? -1 : 1))[0];
  if (latest == undefined) return;
  console.log(latest);

  let users = await db.getUsers();
  let returnMessage = messages.update_notification.format(latest.name, latest.body);

  users.forEach(async user => {
    let botRequestOptions = {
      uri: `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${user.userId}&text=${encodeURIComponent(returnMessage)}`,
      method: 'GET'
    }

    let response = await request(botRequestOptions);
    console.log(`Sending update notification to ${user.userId} - ${user.nickname}: ${response}`)
  }) 
}