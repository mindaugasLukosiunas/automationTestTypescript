import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base";

export class Checkout extends BasePage {
  private readonly summaryProductTitle: Locator;
  private readonly summaryProductPrice: Locator;
  private readonly summarySubtotal: Locator;
  private readonly summaryShippingPrice: Locator;
  private readonly summaryTotalPrice: Locator;
  private readonly shippingDestinationSelect: Locator;
  private readonly shippingDestination: Locator;
  private readonly shippingAddressSelect: Locator;
  private readonly shippingFirstAddress: Locator;
  private readonly continueShippingDetailsBtn: Locator;
  private readonly continueContactInfoBtn: Locator;
  private readonly placeOrderBtn: Locator;
  private readonly email: Locator;
  private readonly fullName: Locator;
  private readonly phone: Locator;
  private readonly comment: Locator;

  constructor(page: Page) {
    super(page);
    this.summaryProductTitle = page
      .locator(
        "//div[contains(@data-qa, 'checkout-cartsummary-itemname-blueberryburstmuffins')]"
      )
      .first();
    this.summaryProductPrice = page
      .locator(
        "//div[contains(@data-qa, 'checkout-cartsummary-itemprice-blueberryburstmuffins')]"
      )
      .first();

    this.summarySubtotal = page
      .locator(
        "//div[contains(@data-qa, 'checkout-cartsummary-subtotalprice-value')]"
      )
      .first();
    this.summaryShippingPrice = page
      .locator(
        "//div[contains(@data-qa, 'checkout-cartsummary-shippingprice')]"
      )
      .first();
    this.summaryTotalPrice = page
      .locator(
        "//div[contains(@data-qa, 'checkout-cartsummary-totalprice-value')]"
      )
      .first();

    this.shippingAddressSelect = page
      .locator('//input[@id="input-13"]')
      .first();

    this.shippingDestinationSelect = page
      .locator(
        "//div[contains(@data-qa, 'checkout-shippingdestination-select')]"
      )
      .first();

    this.shippingDestination = page.getByRole("option", { name: "Lithuania" });

    this.shippingFirstAddress = page
      .getByRole("option", {
        name: /paštomatas/,
      })
      .first();

    this.continueShippingDetailsBtn = page
      .locator(
        "//button[contains(@data-qa, 'checkout-shippingdetails-continue')]"
      )
      .first();
    this.email = page.locator('//input[@id="email"]').first();
    this.fullName = page.locator('//input[@id="name"]').first();
    this.phone = page
      .locator("//input[contains(@class, 'vti__input vti__phone')]")
      .first();
    this.comment = page.locator('//input[@id="customFieldValue"]').first();
    this.continueContactInfoBtn = page
      .locator(
        "//button[contains(@data-qa, 'checkout-contactinformation-continue')]"
      )
      .first();
    this.placeOrderBtn = page
      .locator(
        "//button[contains(@data-qa, 'checkout-paymentmethods-placeorder')]"
      )
      .first();
  }

  async getSummaryProductTitle() {
    return await this.summaryProductTitle.textContent();
  }

  async getSummaryProductPrice() {
    return await this.summaryProductPrice.textContent();
  }

  async getSummarySubtotal() {
    return await this.summarySubtotal.textContent();
  }

  async getSummaryShippingPrice() {
    return await this.summaryShippingPrice.textContent();
  }

  async getSummaryTotalPrice() {
    return await this.summaryTotalPrice.textContent();
  }

  async setShippingDestination() {
    if (!(await this.shippingDestinationSelect.textContent())) {
      await this.shippingDestinationSelect.click();
      await this.shippingDestination.click();
    }
  }

  async setShippingAddress() {
    await this.shippingAddressSelect.click();
    await this.shippingFirstAddress.click();
  }

  async continueWithShippingDetails() {
    await this.continueShippingDetailsBtn.click();
  }

  async continueWithContactInfo() {
    await this.continueContactInfoBtn.click();
  }

  async enterEmail(email: string) {
    await this.email.fill(email);
  }

  async enterFullNamel(fullName: string) {
    await this.fullName.fill(fullName);
  }

  async enterPhone(phone: string) {
    await this.phone.fill(phone);
  }

  async enterComment(comment: string) {
    await this.comment.fill(comment);
  }

  async placeOrder() {
    await this.placeOrderBtn.click();
  }
}
