import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login Page Tests', () => {
  test('should log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate('/');
    await loginPage.login('Hasan ali khan', '123456');
    await page.waitForTimeout(3000);

    const welcomeText = await loginPage.getText('#nameofuser');
    expect(welcomeText).toBe('Welcome Hasan ali khan');
  });
});
