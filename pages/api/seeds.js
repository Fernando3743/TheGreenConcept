import { seedProducts } from "../../models/seeds";

export default async function handler(req, res) {
  const products = await Promise.all(seedProducts());

  res.status(200).json(products);
}
