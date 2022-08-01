import Product from "./Product";

export function seedProducts() {
  const products = [
    [1, "Shirt", 30000],
    [2, "Avodado", 8000],
    [3, "Book", 25000],
    [4, "Gift", 45000],
  ];

  return products.map(
    async ([sku, name, price]) => await Product.create({ sku, name, price })
  );
}
