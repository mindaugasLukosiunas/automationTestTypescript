import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base";

export class ProductsList extends BasePage {
  private readonly firstProductTitle: Locator;
  private readonly firstProductPrice: Locator;

  constructor(page: Page) {
    super(page);
    this.firstProductTitle = page
      .locator("//h6[contains(@data-qa, 'product-list-section-item-title')]")
      .first();
    this.firstProductPrice = page
      .locator("//div[contains(@data-qa, 'product-list-section-item-price')]")
      .first();
  }

  //For simplicity I will use the first product on the list
  async clickOnFirstProductTitle() {
    await this.firstProductTitle.click();
  }

  async getFirstProductPrice() {
    return await this.firstProductPrice.textContent();
  }

  async getFirstProductTitle() {
    return await this.firstProductTitle.textContent();
  }
}
