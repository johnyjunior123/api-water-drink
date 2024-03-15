import query from "../db/database.js";
import { Product } from "../entities/Product.js";
import { User } from "../entities/User.js";

export class EnterpriseService {
  async getEnterprise(id) {
    const result = await query("SELECT * FROM users WHERE id = $1", [id]);
    const enterprise = new User({ ...result.rows[0] });
    return enterprise;
  }

  async createUser({ name, email, password }) {
    const result = await query(
      "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, password, "ENTERPRISE"]
    );
    const user = new User({ ...result.rows[0] });
    return user;
  }

  async getAllEnterprise() {
    const result = await query("SELECT * FROM users WHERE role = $1", [
      "ENTERPRISE",
    ]);
    const enterprises = result.rows.map((element) => {
      return new User(element);
    });
    return enterprises;
  }

  async getEnterpriseProducts(id) {
    const result = await query("SELECT * FROM products WHERE userId = $1", [
      id,
    ]);
    const products = result.rows.map((element) => {
      return new Product(element);
    });
    return products;
  }
}
