function convertPriceToNumber(price) {
  const result = price.replace(/[^0-9.]+/g, "");
  return result;
}

export function addPrices(price1, price2) {
  const convPrice1 = convertPriceToNumber(price1);
  const convPrice2 = convertPriceToNumber(price2);
  const sum = convPrice1 + convPrice2;
  return `€${sum}`;
}
