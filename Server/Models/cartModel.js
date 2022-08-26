import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "makeup",
      required: true,
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    quantity: { type: Number, default: 1, min: 1 },
  },
  {
    timestamps: true,
  }
);

export const Cartmodel = mongoose.model("cart", cartSchema);
