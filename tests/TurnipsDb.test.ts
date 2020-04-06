import { TurnipsDb } from './../src/core/TurnipsDb';
import path from 'path';
import fs from 'fs'

const TEST_USER_UID = '47220554'
const TEST_USER_NICKNAME = 'Pyxis'

// beforeEach(async () => {
//     const dbPath = path.resolve(__dirname, '../../data/data.db');
//     fs.unlinkSync(dbPath)  
// })

// test('Exist user', async () => {
//   let db = TurnipsDb.getInstance();
//   let exists = await db.existsUser(TEST_USER_UID);
//   expect(exists).toEqual(false);
// });

test('Join user', async () => {
    let db = TurnipsDb.getInstance();
    let user = await db.joinUser(TEST_USER_UID, TEST_USER_NICKNAME);
    console.log(user)
})
