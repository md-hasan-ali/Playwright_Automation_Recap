import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  private usernameField = '#username';
  private passwordField = '#password';
  private loginButton = '#login';

  async login(username: string, password: string) {
    await this.type(this.usernameField, username);
    await this.type(this.passwordField, password);
    await this.click(this.loginButton);
  }
}
