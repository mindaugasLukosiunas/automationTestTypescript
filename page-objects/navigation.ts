import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base";

export class Navigation extends BasePage {
  private readonly menuNav: Locator;

  constructor(page: Page) {
    super(page);
    this.menuNav = page.locator("nav");
  }

  async navigateToMenu(pageTitle: string) {
    await this.menuNav.getByRole("link", { name: pageTitle }).click();
  }
}
