import { Page } from '@playwright/test';

export class BasePage {
  constructor(public page: Page) { }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  // async click(selector: string) {
  //   await this.page.click(selector);
  // }
  async click(selector: string, isXPath: boolean = false) {
    const locator = isXPath ? this.page.locator(`xpath=${selector}`) : this.page.locator(selector);
    await locator.click();
  }

  async type(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  async getText(selector: string, isXPath: boolean = false): Promise<string> {
    const locator = isXPath ? this.page.locator(`xpath=${selector}`) : this.page.locator(selector);
    return (await locator.textContent()) || '';
  }
}