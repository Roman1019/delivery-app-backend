// import express from "express";
// import {
//   getProducts,
//   createProduct,
// } from "../controllers/productController.js";

// const router = express.Router();

// router.get("/", getProducts);
// router.post("/", createProduct);

// export default router;
import express from "express";
import Product from "../models/product.js";

const router = express.Router();

// GET /products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find(); // витягує всі продукти з Mongo
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Щось пішло не так", error: err });
  }
});

export default router;
