const orderModel = require("../models/orderModel");

const createOrder = async (req, res) => {
  try {
    const { userId, itemQuantity, item, address } = req.body;
    const newOrder = new orderModel({ userId, itemQuantity, item, address });
    const savedOrder = await newOrder.save();
    res.status(201).json({
      message: "Order created successfully",
      order: savedOrder,
      success: true,
    });
  } catch (error) {
    console.log("error while creating the order", error);
    res.status(500).json({
      message: "error while creating the order",
      error: error.message,
      success: false,
    });
  }
};

module.exports = createOrder;
