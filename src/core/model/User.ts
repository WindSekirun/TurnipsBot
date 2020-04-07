import { table, id, field } from 'sqlite3orm';

@table({ name: 'USERS', autoIncrement: true })
export class User {
  @id({ name: 'id', dbtype: 'INTEGER NOT NULL' })
  id: number = 0;

  @field({ name: 'user_id', dbtype: 'TEXT NOT NULL UNIQUE' })
  userId: string = '';

  @field({ name: 'user_nickname', dbtype: 'TEXT NOT NULL' })
  nickname: string = '';

  @field({ name: 'user_notify' })
  notify: boolean = true;
}