import express from "express";

import { sellProduct,
         moveBrokenProToService } from "../controllers/store.js";
const router = express.Router();


router.patch("/sellProduct/:storeid/:proid", sellProduct);

router.post("/moveBroProToSer/:orderid/:serviceid", moveBrokenProToService);


export default router