import express from 'express';

import config from './config';
import db from './db';

const app = express();
const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/notes', async (req, res) => {
  const result = await db.query('SELECT * FROM notes ORDER BY id ASC');
  res.json({
    data: result.rows
  });
});
