import db from './db';

(async () => {
  const createTableQuery = `CREATE TABLE IF NOT EXISTS notes (id BIGSERIAL PRIMARY KEY NOT NULL, name varchar, content varchar);`;
  await db.query(createTableQuery);
  console.log(`Created table.`);
  await db.end();
})();
