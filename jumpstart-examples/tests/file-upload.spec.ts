import { test, expect } from '@playwright/test';

test('Upload a Single file and assert', async ({page}) => {
    console.log(__dirname)
    await page.goto('https://the-internet.herokuapp.com/upload')
    console.log(process.cwd)
    await page.setInputFiles('input[type="file"]', 'upload/cruise.jpeg')
    await page.click('#file-submit')
    await expect(page.locator('#uploaded-files')).toContainText('cruise.jpeg')
  })