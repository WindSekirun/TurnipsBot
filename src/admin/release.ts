import { TurnipsDb } from "../core/TurnipsDb";
import moment = require("moment");
import request = require("request-promise-native");

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
}