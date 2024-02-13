const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongodb ${mongoose.connection.host}`);
  } catch (error) {
    console.log("error while connection", error);
  }
};

module.exports = { connectDb };
