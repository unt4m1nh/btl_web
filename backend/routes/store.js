import express from "express";

import { sellProduct,
         moveBrokenProToService,
         getStore,
         getStores,
         getOrder,
         getOrders,
         getProduct,
         getProducts,
         updateOrder } from "../controllers/store.js";
const router = express.Router();


router.patch("/sellProduct/:storeid/:proid", sellProduct);

router.post("/moveBroProToSer/:orderid/:serviceid", moveBrokenProToService);

router.get("/findStoreProduct/:id/:proid", getProduct);

router.get("/allStoreProducts/:id", getProducts);

router.get("/findStore/:id", getStore);

router.get("/allStores", getStores);

router.get("/findStoreOrder/:orderid", getOrder);

router.get("/allStoreOrders/:storeid", getOrders);

router.get("/updateOrder/:id", updateOrder);

export default router