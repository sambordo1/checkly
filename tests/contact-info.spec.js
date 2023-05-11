import { test, expect } from '@playwright/test';

test('Select the Contact button to display info', async({page}) => {
      await page.goto('/');
      await page.getByRole('link', { name: 'Contact' }).click();
      await page.getByText('Email sambordo1@gmail.com Phone 412-780-8076 LinkedIn My LinkedIn GitHub My GitH').click();
      await page.locator('#profile_pic').click();
      await page.getByRole('heading', { name: 'Contact Info' }).click();
      await page.goto('http://samuel-bordo.s3-website.us-east-2.amazonaws.com/');
});