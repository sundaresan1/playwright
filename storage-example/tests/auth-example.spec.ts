import { test, expect } from '@playwright/test';

test.use({storageState:'storageState.json'});
test.only('auth', async ({ page }) => {
 
  await page.goto('http://uitestingplayground.com/sampleapp');
  await expect(page.locator('.todo-count')).toHaveText('Welcome, sundar!');  

});