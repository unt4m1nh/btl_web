/*

export const sellProduct = async (req, res, next) => {
    const storeId = req.params.storeid;
    const newOrder = new Order(req.body);
    try {
    const savedOrder = await newOrder.save();
    await Store.updateOne({_id: storeId},
                          {$push: {order: newOrder._id}});
    res.status(200).json(savedOrder);
    } catch (err) {
      next(err);
    }
};

export const moveBrokenProToService = async (req, res, next) => {
  const storeId = req.params.storeid;
  const serviceId = req.params.serviceid;
  const info = req.body;
  try {
  await Store.updateOne({_id: storeId},
                        {$push: {brokenPro: info}});
  await Service.updateOne({_id: serviceId},
                          {$push: {brokenPro: info}});
  res.status(200).json("success");
  } catch (err) {
    next(err);
  }
};
*/