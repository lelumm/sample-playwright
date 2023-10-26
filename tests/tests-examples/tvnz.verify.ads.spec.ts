import { test } from '@playwright/test';
import { TVNZplusPage } from '../lib/page/tvnz.login.page';

test('TVNZ - login to registered profile', async ({ page }, testInfo) => {
  const TVNZplus = new TVNZplusPage(page);
  await TVNZplus.goto();
  await TVNZplus.loginTVNZ(testInfo);
});

test('TVNZ - login - play video - verify first Advertisement 1 of 1', async ({ page }, testInfo) => {
  const TVNZplus = new TVNZplusPage(page);
  await TVNZplus.goto();
  await TVNZplus.loginTVNZ(testInfo);
  await TVNZplus.browseSportsTvShow('NFL Game Day',testInfo);
});
