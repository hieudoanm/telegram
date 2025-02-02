import { Command } from '@oclif/core';
import { getWebhookInfo, setWebhook } from '@telegram/sdk';
import readline from 'node:readline';

const readlineSync = async (question: string): Promise<string> => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`${question}: `, (answer: string) => {
      resolve(answer);
      rl.close();
    });
  });
};

export default class SetWebhook extends Command {
  public async run(): Promise<void> {
    const telegramToken: string = await readlineSync('Telegram Token');
    const telegramWebhook: string = await readlineSync('Telegram Webhook');
    const setWebhookResponse = await setWebhook(telegramToken, telegramWebhook);
    console.info(setWebhookResponse);
    const getWebhookInfoResponse = await getWebhookInfo(telegramToken);
    console.info(getWebhookInfoResponse);
  }
}
