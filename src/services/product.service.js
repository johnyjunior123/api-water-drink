import query from "../db/database.js";
import { Product } from "../entities/Product.js";

export class ProductService {
  async createProduct({ name, photo, price }, idUser) {
    const result = await query(
      "INSERT INTO products (name, photo, price, userId) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, photo, price, idUser]
    );
    const product = new Product({ ...result.rows[0] });
    return product;
  }

  async getAllProducts() {
    const result = await query("SELECT * FROM products");
    const products = result.rows.map((element) => {
      return new Product(element);
    });
    return products;
  }

  async getProduct(id) {
    const result = await query("SELECT * FROM products WHERE id = $1", [id]);
    const product = new Product({ ...result.rows[0] });
    return product;
  }
}
