import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://duckduckgo.com/
  await page.goto('https://duckduckgo.com/');

  // Click [placeholder="Search the web without being tracked"]
  await page.locator('[placeholder="Search the web without being tracked"]').click();

  // Fill [placeholder="Search the web without being tracked"]
  await page.locator('[placeholder="Search the web without being tracked"]').fill('companies that use playwright');

  // Press Enter
  await page.locator('[placeholder="Search the web without being tracked"]').press('Enter');
  await expect(page).toHaveURL('https://duckduckgo.com/?q=companies+that+use+playwright&t=hs&va=l&ia=web');

  // Click text=Companies Using Playwright, Market Share, Customers and Competitors
  await page.locator('text=Companies Using Playwright, Market Share, Customers and Competitors').click();
  await expect(page).toHaveURL('https://discovery.hgdata.com/product/playwright');

});