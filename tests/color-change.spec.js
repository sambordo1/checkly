import { test, expect } from '@playwright/test';

test('change colors on website', async ({ page }) => {
  await page.goto('/');
  await page.locator('#blue-mode').click();
  await page.locator('#green-mode').click();
  await page.locator('#purple-mode').click();
});