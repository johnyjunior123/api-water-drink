import { Router } from "express";
import { OrderService } from "../services/order.service.js";
import { JWTAuth } from "../middleware/jwt.auth.js";

export const orderRoutes = Router();

orderRoutes.post("/order", JWTAuth, async (req, res) => {
  const orderService = new OrderService();
  console.log(req.body);
  const neworder = await orderService.createOrder(req.body, req.user.id);
  res.status(200).json({ ...neworder });
});

orderRoutes.get("/order/:id", JWTAuth, async (req, res) => {
  const orderService = new OrderService();
  const order = await orderService.getOrder(req.params.id, req.user.id);
  res.status(200).json(order);
});

orderRoutes.get("/order", JWTAuth, async (req, res) => {
  const orderService = new OrderService();
  const order = await orderService.getAllOrders(req.user.id);
  console.log(order);
  res.status(200).json(order);
});
