import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login Page Tests', () => {
  test('should log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate('/login');
    await loginPage.login('testuser', 'password123');

    const welcomeText = await loginPage.getText('#welcome-message');
    expect(welcomeText).toBe('Welcome, testuser!');
  });
});
