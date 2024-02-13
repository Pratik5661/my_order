const userModel = require("../models/userModel");
const mongoose = require("mongoose");

const editUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;

    // Validate userId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        message: "Invalid user id",
        success: false,
      });
    }

    // updating user
    const updateUser = await userModel.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    // If user not found
    if (!updateUser) {
      return res.status(404).json({
        message: "user not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "user updated successfully",
      success: true,
      updateUser,
    });
  } catch (error) {
    console.log("error in edit user API", error);
    res.send(500).json({
      message: "error while editing user",
      success: false,
    });
  }
};

module.exports = editUser;
