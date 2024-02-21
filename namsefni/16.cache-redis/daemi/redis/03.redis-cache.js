/*
Keyrt með:
node 03.redis-cache.js

Reiknar n-tu fibonacci tölu, athugar cache áður.
*/

import redis from 'redis';
import util from 'util';

const redisOptions = {
  url: 'redis://127.0.0.1:6379/0',
};

const client = redis.createClient(redisOptions);

const asyncGet = util.promisify(client.get).bind(client);
const asyncSet = util.promisify(client.mset).bind(client);

function timerStart() {
  return process.hrtime();
}

function timerEnd(time) {
  const diff = process.hrtime(time);
  const elapsed = diff[0] * 1e9 + diff[1];
  const elapsedAsSeconds = elapsed / 1e9;

  return Number(elapsedAsSeconds.toFixed(4));
}

function fibonacci(n) {
  if (n < 2) {
    return 1;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}

async function cachedFibonacci(num) {
  const key = `fibo:${num}`;
  console.log(key);

  const cached = await asyncGet(key);

  if (cached) {
    return cached;
  }

  const result = fibonacci(num);

  await asyncSet(key, result);

  return result;
}

async function call() {
  const num = 41;

  const timer1 = timerStart();
  let fibo = await cachedFibonacci(num);
  console.log('Fibo, first run took:', timerEnd(timer1), fibo);

  const timer2 = timerStart();
  fibo = await cachedFibonacci(num);
  console.log('Fibo, second run took:', timerEnd(timer2), fibo);

  client.quit();
}

call().catch((err) => { console.error(err); });
