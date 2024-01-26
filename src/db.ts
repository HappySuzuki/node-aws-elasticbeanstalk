import { Client } from 'pg';

import config from './config';

const client = new Client({
  database: config.dbName,
  host: config.dbHost,
  port: config.dbPort,
  user: config.dbUser,
  password: config.dbPassword
});

const connect = async () => {
  try {
    console.log('Connecting to DB');
    await client.connect();

    const res = await client.query('SELECT $1::text as connected', [
      'Connection to postgres successful!'
    ]);
    console.log(res.rows[0].connected);
    return client;
  } catch (error) {
    console.log('error', error);
  }
};

connect();

export default client;
