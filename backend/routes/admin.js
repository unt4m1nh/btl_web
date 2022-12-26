import express from "express";
import {
  createProduct,
  deletePro,
  getPro,
  getPros,
  updatePro,
} from "../controllers/product.js";
import Product from "../models/Product.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/createProduct", createProduct);

//UPDATE
router.put("/updateProduct/:id", updatePro);
//DELETE
router.delete("/deleteProduct/:id", deletePro);
//GET

router.get("/findProduct/:id", getPro);
//GET ALL
router.get("/allProduct", getPros);


export default router;