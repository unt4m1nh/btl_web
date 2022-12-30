import express from "express";
import {
  createProduct,
  deletePro,
  getPro,
  getPros,
  updatePro,
} from "../controllers/product.js";
import { getUsers,
         deleteUser, 
         countOrder,
          countUser,
          getIncomeMonthly} from "../controllers/user.js"
import {getAllOrders} from "../controllers/store.js"
import Product from "../models/Product.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/createProduct", createProduct);

//UPDATE
router.put("/updateProduct/:id", updatePro);
//DELETE
router.delete("/products/:id", deletePro);
router.delete("/users/:id", deleteUser);
//GET

router.get("/findProduct/:id", getPro);
//GET ALL
router.get("/products", getPros);
router.get("/users", getUsers);
router.get("/product", getAllOrders);

//COUNT
router.get("/countUser", countUser);
router.get("/countOrder", countOrder);
router.get("/countIncome", getIncomeMonthly);


export default router;