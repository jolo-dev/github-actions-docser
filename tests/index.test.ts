// import {wait} from '../src/wait';
// import process from 'process';
// import cp from 'child_process';
// import path from 'path';
// import { test, expect } from 'vitest'

// test('wait 500 ms', async () => {
//   const start = new Date();
//   await wait(500);
//   const end = new Date();
//   const delta = Math.abs(end - start);
//   expect(delta).toBeGreaterThanOrEqual(500);
// });

// // shows how the runner will run a javascript action with env / stdout protocol
// test('test runs', () => {
//   process.env['INPUT_MILLISECONDS'] = 100;
//   const ip = path.join(__dirname, '../dist/index.mjs');
//   const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
//   console.log(result);
// })
