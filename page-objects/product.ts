import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base";

export class Product extends BasePage {
  private readonly productPrice: Locator;
  private readonly productTitle: Locator;
  private readonly productQuantity: Locator;
  private readonly addToBagBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.addToBagBtn = page
      .locator("//button[contains(@data-qa, 'productsection-btn-addtobag')]")
      .first();

    this.productPrice = page
      .locator("//p[contains(@class, 'block-product__price')]")
      .first();

    this.productTitle = page
      .locator("//h1[contains(@data-qa, 'builder-product-section-title')]")
      .first();

    this.productQuantity = page
      .locator("//input[contains(@data-qa, 'productpage-text-qty')]")
      .first();
  }

  async getProductPrice() {
    return await this.productPrice.textContent();
  }

  async getProductTitle() {
    return await this.productTitle.textContent();
  }

  async getProductQunatity() {
    return await this.productQuantity.textContent();
  }

  async addToBag() {
    await this.addToBagBtn.click();
  }
}
