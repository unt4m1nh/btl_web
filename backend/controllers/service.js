/*

export const returnBrokenProToStore = async (req, res, next) => {
    const storeId = req.params.storeid;
    const serviceId = req.params.serviceid;
    const orderId = req.params.orderid;
    try {
    await Store.updateOne({_id: storeId},
                          {$set: {'brokenPro.$[o].status': 'Fixed'}},
                          {arrayFilters: [{'o._id': orderId}]});
    await Service.updateOne({_id: serviceId},
                            {$set: {'brokenPro.$[o].status': 'Fixed'}},
                            {arrayFilters: [{'o._id': orderId}]});
    res.status(200).json(savedOrder);
    } catch (err) {
      next(err);
    }
};

export const returnBrokenProToFactory = async (req, res, next) => {
    const facId = req.params.facid;
    const serviceId = req.params.serviceid;
    const orderId = req.params.orderId;
    const stockId = req.params.stockid;
    try {
        await Factory.updateOne({_id: facId},
                                {$set: {'brokenPro.$[s].quantity': req.body.quantity,'brokenPro.$[s].status': 'Return to Factory' }},
                                {arrayFilters: [{'s._id': stockId}]});
        await Service.updateOne({_id: serviceId},
                                {$set: {'brokenPro.$[o].status': 'Return to Factory'}},
                                {arrayFilters: [{'o._id': orderId}]});
        res.status(200).json("Factory's brokenPro has been updated.");
    } catch (err) {
      next(err);
    }
  };
  */