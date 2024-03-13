import { User } from "../entities/User.js";
import query from "../db/database.js";

export class UserService {
  async createUser({ name, email, password }) {
    const result = await query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password]
    );
    const user = new User({ ...result.rows[0] });
    return user;
  }

  async getUser(id) {
    const result = await query("SELECT * FROM users WHERE id = $1", [id]);
    const user = new User({ ...result.rows[0] });
    return user;
  }
}
