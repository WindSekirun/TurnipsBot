import { table, id, field } from 'sqlite3orm';

@table({ name: 'RECORDS', autoIncrement: true })
export class Record {
  @id({ name: 'id', dbtype: 'INTEGER NOT NULL' })
  id: number = 0;

  @field({ name: 'user_id', dbtype: 'TEXT NOT NULL UNIQUE' })
  userId: string = '';

  @field({ name: 'record_id', dbtype: 'TEXT NOT NULL' })
  recordDate: string = '';

  @field({ name: 'record_buy_price', dbtype: 'TEXT' })
  buyPrice: string = '';

  @field({ name: 'record_mon_am', dbtype: 'TEXT' })
  monAm: string = '';

  @field({ name: 'record_mon_pm', dbtype: 'TEXT' })
  monPm: string = '';

  @field({ name: 'record_tue_am', dbtype: 'TEXT' })
  tueAm: string = '';

  @field({ name: 'record_tue_pm', dbtype: 'TEXT' })
  tuePm: string = '';

  @field({ name: 'record_wed_am', dbtype: 'TEXT' })
  wedAm: string = '';

  @field({ name: 'record_wed_pm', dbtype: 'TEXT' })
  wedPm: string = '';

  @field({ name: 'record_thu_am', dbtype: 'TEXT' })
  thuAm: string = '';

  @field({ name: 'record_thu_pm', dbtype: 'TEXT' })
  thuPm: string = '';

  @field({ name: 'record_fri_am', dbtype: 'TEXT' })
  friAm: string = '';

  @field({ name: 'record_fri_pm', dbtype: 'TEXT' })
  friPm: string = '';

  @field({ name: 'record_sat_am', dbtype: 'TEXT' })
  satAm: string = '';

  @field({ name: 'record_sat_pm', dbtype: 'TEXT' })
  satPm: string = '';
}
