import core from '@actions/core';
import {wait} from './wait';

/**
 * This is a TypeScript function that waits for a specified number of milliseconds and then outputs the
 * current time.
 * @beta
 */
export default async function run() {
  try {
    const ms = core.getInput('milliseconds');
    core.info(`Waiting ${ms} milliseconds ...`);

    core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    await wait(parseInt(ms));
    core.info((new Date()).toTimeString());

    core.setOutput('time', new Date().toTimeString());
  } catch (error: any) {
    core.setFailed(error);
  }
}
