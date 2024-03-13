import query from "../db/database.js";
import { Product } from "../entities/Product.js";

export class ProductService {
  async createProduct({ name, measure, price }) {
    const result = await query(
      "INSERT INTO products (name, measure, price) VALUES ($1, $2, $3) RETURNING *",
      [name, measure, price]
    );
    const product = new Product({ ...result.rows[0] });
    return product;
  }

  async getProduct(id) {
    const result = await query("SELECT * FROM products WHERE id = $1", [id]);
    const product = new Product({ ...result.rows[0] });
    return product;
  }

  async getAllProducts() {
    const result = await query("SELECT * FROM products");
    const products = result.rows.map((element) => {
      return new Product(element)
    });
    return products;
  }
}
