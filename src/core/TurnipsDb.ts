import { SqlDatabase, schema, BaseDAO } from "sqlite3orm";
import { User } from "./model/User";
import { Record } from "./model/Record";
import { RecordKind, convertToRecord, checkBellExists } from "./model/RecordKind";
import moment from "moment";
import path from "path";

require("dotenv").config();

export class TurnipsDb {
  private static instance: TurnipsDb;
  private sqldb = new SqlDatabase();
  private userDao!: BaseDAO<User>;
  private recordDao!: BaseDAO<Record>;

  private constructor() {}

  static async getInstance(filePath: string = "../../data/data.db"): Promise<TurnipsDb> {
    if (!TurnipsDb.instance) {
      let instance = new TurnipsDb();
      await instance.initialize(filePath);
      this.instance = instance;
    }

    return TurnipsDb.instance;
  }

  async existsUser(uid: string): Promise<Boolean> {
    return (await this.getUser(uid)) != undefined;
  }

  async joinUser(uid: string, nickname: string): Promise<User | undefined> {
    if (await this.existsUser(uid)) {
      return this.getUser(uid);
    }

    let user = new User();
    user.userId = uid;
    user.nickname = nickname;
    return await this.userDao?.insert(user);
  }

  async deleteUser(uid: string): Promise<User | undefined> {
    let user = await this.getUser(uid);
    if (user != undefined) {
      if (await this.existsRecordByUser(uid)) {
        await this.recordDao.deleteAll({ userId: uid });
      }
      await this.userDao?.delete(user);
      return user;
    }

    return undefined;
  }

  async isNotifyUser(uid: string): Promise<Boolean> {
    let user = await this.getUser(uid);
    if (user != undefined) {
      return user.notify;
    }

    return false;
  }

  async setNotifyUser(uid: string, state: boolean): Promise<User | undefined> {
    let user = await this.getUser(uid);
    if (user != undefined) {
      user.notify = state;
      user = await this.userDao.update(user);
      return user;
    }

    return undefined;
  }

  async getNotifyUsers(): Promise<User[]> {
    return (await this.userDao?.selectAll({ notify: true })) ?? [];
  }

  async getNotifyUserByRecordKind(kind: RecordKind): Promise<User[]> {
    const recordDate = this.getRecordDate();
    const users = await this.getNotifyUsers();
    return users
      .filter((user) => user.ignoreRecordDate != recordDate)
      .filter(async (user) => {
        let record = await this.getRecord(user.userId, recordDate);
        if (record != undefined) {
          return checkBellExists(record, kind)
        }
        return false;
      });
  }

  async buyTurnips(uid: string, buyPrice: string): Promise<Record | undefined> {
    let recordDate = this.getRecordDate();
    let record = await this.getRecord(uid, recordDate);
    if (record != undefined) {
      const oldId = record.id;
      record = new Record();
      record.id = oldId;
      record.userId = uid;
      record.recordDate = recordDate;
      record.buyPrice = buyPrice;
      record = await this.recordDao?.update(record);
    } else {
      record = new Record();
      record.userId = uid;
      record.recordDate = recordDate;
      record.buyPrice = buyPrice;
      record = await this.recordDao?.insert(record);
    }
    return record;
  }

  async existsRecord(uid: string): Promise<Boolean> {
    let recordDate = this.getRecordDate();
    let record = await this.getRecord(uid, recordDate);
    return record != undefined;
  }

  async existsRecordByUser(uid: string): Promise<Boolean> {
    let records = (await this.recordDao?.selectAll({ userId: uid })) ?? [];
    return records.length > 0;
  }

  async recordBell(uid: string, kind: RecordKind, bell: string): Promise<Record | undefined> {
    let recordDate = this.getRecordDate();
    let record = await this.getRecord(uid, recordDate);
    if (record != undefined) {
      record = convertToRecord(record, kind, bell);
      record = await this.recordDao?.update(record);
      return record;
    }

    return undefined;
  }

  async getRecordString(uid: string): Promise<string> {
    let recordDate = this.getRecordDate();
    let record = await this.getRecord(uid, recordDate);
    if (record != undefined) {
      let result = `const priceArray = ["${record.buyPrice}", "${record.monAm}", "${record.monPm}", "${record.tueAm}", "${record.tuePm}", "${record.wedAm}", "${record.wedPm}", "${record.thuAm}", "${record.thuPm}", "${record.friAm}", "${record.friPm}", "${record.satAm}", "${record.satPm}"]`;
      return result;
    }

    return 'const priceArray = ["", "", "", "", "", "", "", "", "", "", "", "", ""]';
  }

  async ignoreRecordDate(uid: string): Promise<User | undefined> {
    let recordDate = this.getRecordDate();
    let user = await this.getUser(uid);
    if (user != undefined) {
      user.ignoreRecordDate = recordDate;
      user = await this.userDao.update(user);
      return user;
    }

    return undefined;
  }

  async close() {
    this.sqldb.close();
  }

  private async getUser(uid: string): Promise<User | undefined> {
    let users = (await this.userDao?.selectAll({ userId: uid })) ?? [];
    return users[0] ?? undefined;
  }

  private async getRecord(uid: string, date: string): Promise<Record | undefined> {
    let records = (await this.recordDao?.selectAll({ userId: uid, recordDate: date })) ?? [];
    return records[0] ?? undefined;
  }

  private getRecordDate(): string {
    return moment().day("Sunday").format("YYYYMMDD");
  }

  private async initialize(filePath: string) {
    const dbPath = path.resolve(__dirname, filePath);
    await this.sqldb.open(dbPath);

    let userVersion = await this.sqldb.getUserVersion();

    await schema().createTable(this.sqldb, "USERS");
    await schema().createTable(this.sqldb, "RECORDS");

    if (userVersion == 1) {
      await schema().alterTableAddColumn(this.sqldb, "USERS", "user_ignore_record_date");
      console.log(`Database migrated, request add column 'user_ignore_record_date' in issue #4`);
    }

    await this.sqldb.setUserVersion(2);

    this.userDao = new BaseDAO(User, this.sqldb);
    this.recordDao = new BaseDAO(Record, this.sqldb);

    console.log("Database initialized!");
  }
}
