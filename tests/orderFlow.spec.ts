import { expect, test } from "../fixtures/fixtures";
import { addPrices } from "../helpers/helpers";

test("Full successfull product order flow", async ({
  homepage,
  navigation,
  checkout,
  productList,
  product,
  cartDrawer,
  orderSuccess,
}) => {
  await homepage.goToHomepage();
  await navigation.navigateToMenu("Shop");

  const titleFromList = await productList.getFirstProductTitle();
  const priceFromList = await productList.getFirstProductPrice();
  await productList.clickOnFirstProductTitle();

  const productTitle = await product.getProductTitle();
  const productPrice = await product.getProductPrice();
  const productQuantity = await product.getProductQunatity();

  await expect(titleFromList).toEqual(productTitle);
  await expect(priceFromList).toEqual(productPrice);

  await product.addToBag();

  const cartProductTitle = await cartDrawer.getFirstProductTitle();
  const cartProductPrice = await cartDrawer.getFirstProductPrice();
  const cartProductQuantity = await cartDrawer.getFirstProductQuantity();

  await expect(productTitle?.trim()).toEqual(cartProductTitle?.trim());
  await expect(productPrice?.trim()).toEqual(cartProductPrice?.trim());
  await expect(productQuantity).toEqual(cartProductQuantity);

  await cartDrawer.checkout();

  const summaryProductTitle = await checkout.getSummaryProductTitle();
  const summaryProductPrice = await checkout.getSummaryProductPrice();
  const summaryShippingPrice = await checkout.getSummaryShippingPrice();
  const summarySubtotal = await checkout.getSummarySubtotal();
  const summaryTotalPrice = await checkout.getSummaryTotalPrice();
  const sum = addPrices(summaryProductPrice, summaryShippingPrice);

  await expect(summaryProductTitle?.trim()).toEqual(cartProductTitle?.trim());
  await expect(summaryProductPrice?.trim()).toEqual(cartProductPrice?.trim());
  await expect(summarySubtotal?.trim()).toEqual(summaryProductPrice?.trim());
  await expect(summaryTotalPrice?.trim()).toEqual(sum);

  await checkout.setShippingDestination();
  await checkout.setShippingAddress();

  await checkout.continueWithShippingDetails();

  await checkout.enterEmail("testas@testauskas.com");
  await checkout.enterFullNamel("Testas Testauskas");
  await checkout.enterPhone("+37066666666");
  await checkout.enterComment("Comment");

  await checkout.continueWithContactInfo();

  //possibly some checks for payments methods.
  await checkout.placeOrder();

  await expect(orderSuccess.orderSuccessAlert).toContainText(
    "Thank you for your order"
  );
  await expect(orderSuccess.orderSuccessAlert).toContainText(
    "Your order has been received."
  );
});
