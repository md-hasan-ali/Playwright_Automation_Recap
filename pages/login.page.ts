import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  private usernameField = '#loginusername';
  private passwordField = '#loginpassword';
  private loginButton = '#login2';
  private loginxpath = "//button[contains(text(), 'Log in')]";

  async login(username: string, password: string) {
    await this.click(this.loginButton);
    await this.type(this.usernameField, username);
    await this.type(this.passwordField, password);
    await this.click(this.loginxpath);
  }
}
