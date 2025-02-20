import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base";

export class CartDrawer extends BasePage {
  private readonly firstProductTitle: Locator;
  private readonly firstProductPrice: Locator;
  private readonly firstProductQuantity: Locator;
  private readonly checkoutBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.firstProductTitle = page
      .locator("//p[contains(@data-qa, 'shoppingcart-text-product')]")
      .first();
    this.firstProductPrice = page
      .locator("//p[contains(@data-qa, 'shoppingcart-text-price')]")
      .first();
    this.firstProductQuantity = page
      .locator("//input[contains(@data-qa, 'shoppingcart-text-qty')]")
      .first();
    this.checkoutBtn = page
      .locator("//button[contains(@data-qa, 'shoppingcart-btn-checkout')]")
      .first();
  }

  async getFirstProductTitle() {
    return await this.firstProductTitle.textContent();
  }

  async getFirstProductPrice() {
    return await this.firstProductPrice.textContent();
  }

  async getFirstProductQuantity() {
    return await this.firstProductQuantity.textContent();
  }

  async checkout() {
    await this.checkoutBtn.click();
  }
}
