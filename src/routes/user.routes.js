import { Router } from "express";
import { UserService } from "../services/user.service.js";

export const userRoutes = Router();

userRoutes.post("/user", async (req, res) => {
  const userService = new UserService();
  const newuser = await userService.createUser(req.body);
  res.status(200).json({ ...newuser, password: undefined });
});

userRoutes.get("/user/:id", async (req, res) => {
  const userService = new UserService();
  const user = await userService.getUser(req.params.id);
  res.status(200).json({ ...user, password: undefined });
});
