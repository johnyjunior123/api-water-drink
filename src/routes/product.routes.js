import { Router } from "express";
import { ProductService } from "../services/product.service.js";
import { JWTAuth } from "../middleware/jwt.auth.js";

export const productRoutes = Router();

productRoutes.post("/product", JWTAuth, async (req, res) => {
  const productService = new ProductService();
  const newProduct = await productService.createProduct(req.body);
  res.status(200).json({ ...newProduct });
});

productRoutes.get("/product/:id", async (req, res) => {
  const productService = new ProductService();
  const product = await productService.getProduct(req.params.id);
  res.status(200).json({ ...product });
});

productRoutes.get("/product", async (req, res) => {
  const productService = new ProductService();
  const product = await productService.getAllProducts();
  res.status(200).json(product);
});
