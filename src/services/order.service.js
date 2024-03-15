import query from "../db/database.js";
import { Order } from "../entities/Order.js";

export class OrderService {
  async createOrder(
    { date, name, photo, type, price, quantity, total },
    idUser
  ) {
    console.log(date);
    console.log(name);
    const result = await query(
      "INSERT INTO orders (date, name, photo, type, price, quantity, total, userId) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [date, name, photo, type, price, quantity, total, idUser]
    );
    const order = new Order({ ...result.rows[0] });
    return order;
  }

  async getAllOrders(id) {
    const result = await query("SELECT * FROM orders WHERE userId = $1", [id]);
    const orders = result.rows.map((element) => {
      return new Order(element);
    });
    return orders;
  }

  async getOrder(id, userId) {
    const result = await query(
      "SELECT * FROM orders WHERE id = $1 AND userId = $2",
      [id, userId]
    );
    const order = new Order({ ...result.rows[0] });
    return order;
  }
}
