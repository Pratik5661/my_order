const orderModel = require("../models/orderModel");

const getOrdersByUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const orders = await orderModel.find({ userId: userId });
    res.status(200).json({
      message: "Order fetched successfully",
      orders,
      success: true,
    });
  } catch (error) {
    console.log("error while fetching user orders");
    res.status(500).json({
      message: "error while fetching user orders",
      error: error.message,
      success: false,
    });
  }
};

module.exports = getOrdersByUser;
