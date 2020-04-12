import { TurnipsDb } from "./../src/core/TurnipsDb";
import path from "path";
import fs from "fs";
import moment from "moment";
import { RecordKind } from "../src/core/model/RecordKind";

const TEST_USER_UID = "47220554";
const TEST_USER_NICKNAME = "Pyxis";
const filePath = "../../tmp/data-jest.db";

test("Delete Temp User", async () => {
  // before running test by serial, remove old file
  let filePath = path.resolve(__dirname, "../tmp/data-jest.db");
  let exist = fs.existsSync(filePath);
  if (exist) {
    fs.unlinkSync(filePath);
  }

  let db = await TurnipsDb.getInstance(filePath);
  await db.joinUser(TEST_USER_UID, TEST_USER_NICKNAME);
  let deleteUser = await db.deleteUser(TEST_USER_UID);
  let exists = await db.existsUser(TEST_USER_UID);
  expect(exists).toEqual(false);
  expect(deleteUser?.userId).toEqual(TEST_USER_UID);
});

test("Join Real user", async () => {
  let db = await TurnipsDb.getInstance(filePath);
  let result = await db.joinUser(TEST_USER_UID, TEST_USER_NICKNAME);
  expect(result).not.toBeUndefined;
  expect(result?.userId).toEqual(TEST_USER_UID);
});

test("Exist Real user", async () => {
  let db = await TurnipsDb.getInstance(filePath);
  let result = await db.existsUser(TEST_USER_UID);
  expect(result).toEqual(true);
});

test("Check user accept notify", async () => {
  let db = await TurnipsDb.getInstance(filePath);
  let result = await db.isNotifyUser(TEST_USER_UID);
  expect(result).toEqual(true);
});

test("Set notify to false and true", async () => {
  let db = await TurnipsDb.getInstance(filePath);
  await db.setNotifyUser(TEST_USER_UID, false);
  let isNotify = await db.isNotifyUser(TEST_USER_UID);
  expect(isNotify).toEqual(false);

  await db.setNotifyUser(TEST_USER_UID, true);
  let isNotify2 = await db.isNotifyUser(TEST_USER_UID);
  expect(isNotify2).toEqual(true);
});

test("Get Notify Target user", async () => {
  let db = await TurnipsDb.getInstance(filePath);
  let result = await db.getNotifyUsers();
  expect(result[0].userId).toEqual(TEST_USER_UID);
});

test("Not exists Record", async () => {
  let db = await TurnipsDb.getInstance(filePath);
  let result = await db.existsRecord(TEST_USER_UID);
  expect(result).toEqual(false);
});

test("Buy turnips", async () => {
  let recordDate = moment().day("Sunday").format("YYYYMMDD");
  let db = await TurnipsDb.getInstance(filePath);
  let result = await db.buyTurnips(TEST_USER_UID, "94");
  expect(result?.userId).toEqual(TEST_USER_UID);
  expect(result?.recordDate).toEqual(recordDate);
  expect(result?.buyPrice).toEqual("94");
});

test("Exists Record", async () => {
  let db = await TurnipsDb.getInstance(filePath);
  let result = await db.existsRecord(TEST_USER_UID);
  expect(result).toEqual(true);
});

test("Record bell", async () => {
  let recordDate = moment().day("Sunday").format("YYYYMMDD");
  let db = await TurnipsDb.getInstance(filePath);
  await db.recordBell(TEST_USER_UID, RecordKind.MON_AM, "110");
  await db.recordBell(TEST_USER_UID, RecordKind.MON_PM, "109");
  await db.recordBell(TEST_USER_UID, RecordKind.TUE_AM, "108");
  await db.recordBell(TEST_USER_UID, RecordKind.TUE_PM, "107");
  await db.recordBell(TEST_USER_UID, RecordKind.WED_AM, "106");
  await db.recordBell(TEST_USER_UID, RecordKind.WED_PM, "105");
  await db.recordBell(TEST_USER_UID, RecordKind.THU_AM, "104");
  await db.recordBell(TEST_USER_UID, RecordKind.THU_PM, "103");
  await db.recordBell(TEST_USER_UID, RecordKind.FRI_AM, "102");
  await db.recordBell(TEST_USER_UID, RecordKind.FRI_PM, "101");
  await db.recordBell(TEST_USER_UID, RecordKind.SAT_AM, "100");

  let result = await db.recordBell(TEST_USER_UID, RecordKind.SAT_PM, "99");
  expect(result?.userId).toEqual(TEST_USER_UID);
  expect(result?.recordDate).toEqual(recordDate);
  expect(result?.buyPrice).toEqual("94");
  expect(result?.monAm).toEqual("110");
  expect(result?.monPm).toEqual("109");
  expect(result?.tueAm).toEqual("108");
  expect(result?.tuePm).toEqual("107");
  expect(result?.wedAm).toEqual("106");
  expect(result?.wedPm).toEqual("105");
  expect(result?.thuAm).toEqual("104");
  expect(result?.thuPm).toEqual("103");
  expect(result?.friAm).toEqual("102");
  expect(result?.friPm).toEqual("101");
  expect(result?.satAm).toEqual("100");
  expect(result?.satPm).toEqual("99");
});

test("Record String for generating file", async () => {
  let db = await TurnipsDb.getInstance(filePath);
  let result = await db.getRecordString(TEST_USER_UID);
  expect(result).toEqual(
    'const priceArray = ["94", "110", "109", "108", "107", "106", "105", "104", "103", "102", "101", "100", "99"]'
  );
});

test("Join Temp user2", async () => {
  let db = await TurnipsDb.getInstance(filePath);
  let result = await db.joinUser("323124", "test");
  expect(result).not.toBeUndefined;
  expect(result?.userId).toEqual("323124");
});

test("Ignore Date Value", async () => {
  let db = await TurnipsDb.getInstance(filePath);
  await db.ignoreRecordDate(TEST_USER_UID);
  let result = await db.getNotifyUserByRecordKind(RecordKind.MON_AM);
  expect(result).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        userId: '323124'
      })
    ])
  )
});

test("Check feature in ignoreDateValue", async () => {
  let db = await TurnipsDb.getInstance(filePath);
  let exists = await db.existsIgnoreRecordDate(TEST_USER_UID);
  expect(exists).toEqual(true);
  await db.removeIgnoreRecordDate(TEST_USER_UID);
  await db.buyTurnips(TEST_USER_UID, "94");

  let beforeRecord = await db.getNotifyUserByRecordKind(RecordKind.MON_AM);
  expect(beforeRecord).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        userId: TEST_USER_UID
      })
    ])
  )

  await db.recordBell(TEST_USER_UID, RecordKind.MON_AM, "110");
  let afterRecord = await db.getNotifyUserByRecordKind(RecordKind.MON_AM);
  expect(afterRecord).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        userId: '323124'
      })
    ])
  )
});