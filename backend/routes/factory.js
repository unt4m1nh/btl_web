import express from "express";
import {addProToStock,
        exportToStore,
        getFactory,
        getFactorys,
        getProduct,
        getProducts } from "../controllers/factory.js";

const router = express.Router();

router.patch("/addProToStock/:facid/:proid", addProToStock);

router.patch("/exportToStore/:facid/:storeid/:proid", exportToStore);

router.get("/findFactoryProduct/:id/:proid", getProduct);

router.get("/allFactoryProducts/:id", getProducts);

router.get("/findFactory/:id", getFactory);

router.get("/allFactorys", getFactorys);




export default router