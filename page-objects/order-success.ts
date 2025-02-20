import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base";

export class OrderSuccess extends BasePage {
  readonly orderSuccessAlert: Locator;

  constructor(page: Page) {
    super(page);
    this.orderSuccessAlert = page
      .locator(
        "//div[contains(@data-qa, 'ecommerce-modal-checkout-success-order')]"
      )
      .first();
  }

  async getSuccessText() {
    return await this.orderSuccessAlert.textContent();
  }
}
