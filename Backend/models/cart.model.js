const mongoose = require("mongoose");


const cartSchema = mongoose.Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId, ref:"user", required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "makeup",
      required: true,
    },
    quantity: { type: Number, default: 1, min: 1 },
  },
  {
    timestamps: true,
  }
);

const Cartmodel = mongoose.model("cart", cartSchema);

module.exports = Cartmodel;
