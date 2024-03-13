import { Router } from "express";
import { User } from "../entities/User.js";
import query from "../db/database.js";
import jwt from "jsonwebtoken";

export const authRoutes = Router();

authRoutes.post("/login", async (req, res) => {
  const result = await query("SELECT * FROM users WHERE email = $1 LIMIT 1", [
    req.body.email,
  ]);
  const user = new User({ ...result.rows[0] });
  if (user.password === req.body.password) {
    const token = jwt.sign({ ...user }, process.env.SECRET, {
      expiresIn: "1d",
    });
    return res.json({ user: { ...user, password: undefined }, token });
  }
  return res.status(400).json("email or password incorrect");
});
