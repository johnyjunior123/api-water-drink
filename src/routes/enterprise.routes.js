import { Router } from "express";
import { EnterpriseService } from "../services/enterprise.service.js";

export const enterpriseRoutes = Router();

enterpriseRoutes.get("/enterprise/:id", async (req, res) => {
  const enterpriseService = new EnterpriseService();
  const enterprise = await enterpriseService.getEnterprise(req.params.id);
  res.status(200).json({ ...enterprise, password: undefined });
});

enterpriseRoutes.post("/enterprise", async (req, res) => {
  const userService = new EnterpriseService();
  const newuser = await userService.createUser(req.body);
  res.status(200).json({ ...newuser, password: undefined });
});

enterpriseRoutes.get("/enterprises", async (req, res) => {
  const enterpriseService = new EnterpriseService();
  const enterprises = await enterpriseService.getAllEnterprise();
  res.status(200).json(
    enterprises.map((enterprise) => {
      return { ...enterprise, password: undefined };
    })
  );
});

enterpriseRoutes.get("/enterprise/products/:id", async (req, res) => {
  const enterpriseService = new EnterpriseService();
  const enterprise = await enterpriseService.getEnterpriseProducts(
    req.params.id
  );
  res.status(200).json(enterprise);
});
