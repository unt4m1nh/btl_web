import express from "express";
import {addProToStock,
        exportToStore,
        getFac,
        getFacs } from "../controllers/factory.js";

const router = express.Router();

router.patch("/addProToStock/:facid/:proid", addProToStock);

router.patch("/exportToStore/:facid/:storeid/:proid", exportToStore);
/*
router.patch("/reciveBrokenPro/:facid/:serviceid/:stockid", receiveBrokenPro);
*/
router.get("/findFactoryProduct/:id/:proid", getFac);

router.get("/allFactoryProducts/:id", getFacs);

export default router