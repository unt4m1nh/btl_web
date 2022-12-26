import Stock from "../models/Stock.js";
import Order from "../models/Order.js";
import Warranty from "../models/Warranty.js";
export const sellProduct = async (req, res, next) => {
    const storeId = req.params.storeid;
    const proId = req.params.proid;
    try {
      await Stock.updateOne({director:storeId, productId: proId},
                            {$inc: {quantity: -1}});
      const newOrder = new Order({
        customerName: req.body.customerName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        productId: proId,
        storeId: storeId,
        status: 'Sold',
      })
      await newOrder.save();
    res.status(200).json("order have been created");
    } catch (err) {
      next(err);
    }
};

export const moveBrokenProToService = async (req, res, next) => {
  const serviceId = req.params.serviceid;
  const orderId = req.params.orderid;
  try {
  await Order.updateOne({_id: orderId},
                        {$inc: {WarrantyTime: 1}, 
                         $set: {status: 'In Service'}});
  const newWarranty = new Warranty({
    Staff: req.body.staff,
    status: 'In reparing',
    orderId: orderId,
    serviceId: serviceId,
  })
  await newWarranty.save();
  res.status(200).json("success");
  } catch (err) {
    next(err);
  }
};
