import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goToHomepage() {
    await this.page.goto(
      "https://lightgrey-antelope-m7vwozwl8xf7l3y2.builder-preview.com/"
    );
  }
}
