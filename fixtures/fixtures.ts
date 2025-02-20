import { test as base } from "@playwright/test";
import { HomePage } from "../page-objects/homepage";
import { Checkout } from "../page-objects/checkout";
import { Navigation } from "../page-objects/navigation";
import { ProductsList } from "../page-objects/products-list";
import { Product } from "../page-objects/product";
import { CartDrawer } from "../page-objects/cart-drawer";
import { OrderSuccess } from "../page-objects/order-success";

type MyFixtures = {
  navigation: Navigation;
  homepage: HomePage;
  checkout: Checkout;
  product: Product;
  productList: ProductsList;
  cartDrawer: CartDrawer;
  orderSuccess: OrderSuccess;
};

export const test = base.extend<MyFixtures>({
  homepage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  checkout: async ({ page }, use) => {
    await use(new Checkout(page));
  },
  navigation: async ({ page }, use) => {
    await use(new Navigation(page));
  },
  product: async ({ page }, use) => {
    await use(new Product(page));
  },
  productList: async ({ page }, use) => {
    await use(new ProductsList(page));
  },
  cartDrawer: async ({ page }, use) => {
    await use(new CartDrawer(page));
  },
  orderSuccess: async ({ page }, use) => {
    await use(new OrderSuccess(page));
  },
});
export { expect } from "@playwright/test";
