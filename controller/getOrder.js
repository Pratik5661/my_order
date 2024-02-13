const orderModel = require("../models/orderModel");

const getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();
    res.status(200).json({
      message: "order fetched successfully",
      orders,
      success: true,
    });
  } catch (error) {
    console.log("error while fetching order details", error);
    res.status(501).json({
      message: "error while fetching orders",
      error: error.message,
      success: false,
    });
  }
};

module.exports = getOrders;