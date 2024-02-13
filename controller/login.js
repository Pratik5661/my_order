const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({
        message: "user not found",
        success: false,
      });
    }

    // compare password
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!comparePassword) {
      return res.status(500).send({
        message: "Invaild Credentials",
        success: false,
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).send({
      message: "Login Successfull",
      success: true,
      token,
    });
  } catch (error) {
    console.log("error in login api", error);
    res.status(500).send({
      message: "internal server error",
      success: false,
    });
  }
};

module.exports = loginController;
