const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "userId is required"],
    },

    itemQuantity: {
      type: Number,
      required: [true, "itemQuantity is required"],
    },

    item: {
      type: String,
      required: [true, "item is required"],
    },

    dateAndTime: {
      type: Date,
      default: Date.now,
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
