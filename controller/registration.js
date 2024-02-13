const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const registrationController = async (req, res) => {
  try {
    const exitingUser = await userModel.findOne({ email: req.body.email });
    if (exitingUser) {
      return res.status(200).send({
        message: "User already exits",
        success: false,
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    req.body.password = hashPassword;

    // rest data
    const user = new userModel(req.body);
    await user.save();
    return res.status(201).send({
      message: "user created successfully",
      success: true,
    });
  } catch (error) {
    console.log("error in response", error);
    res.status(500).json({
      message: "error in registration api",
      error,
      success: false,
    });
  }
};

module.exports = registrationController;
