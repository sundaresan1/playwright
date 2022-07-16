import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://uitestingplayground.com/sampleapp');
  await page.fill('input[name="UserName"]', 'sundaresank');
  await page.fill('input[name="Password"]', 'pwd');
  await page.click('text=Log in');
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;