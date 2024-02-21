/*
Keyrt með
node 01.cache.js

Keyrir express vefþjón sem stillir cache fyrir gögn /public gegnum
express.static með hámarksaldri upp á 1 dag með etag.
*/

import express from 'express';

const app = express();

app.use(express.static('public', {
  maxAge: '365d',
  etag: true,
}));

const port = 3000;
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
