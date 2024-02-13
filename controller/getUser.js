const user = require("../models/userModel");

const userController = async (req, res) => {
  try {
    const getUser = await user.find();

    return res.status(200).json({
      message: "user details fetched successfully",
      success: true,
      getUser,
    });
  } catch (error) {
    console.log("error in user controller");
    res.status(500).json({
      message: "error while fetching the user details",
      success: false,
    });
  }
};

module.exports = userController;
