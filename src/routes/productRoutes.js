import express from "express";
import {
  getProducts,
  createProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct); // POST для додавання товару

export default router;
