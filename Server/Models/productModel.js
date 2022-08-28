import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  prodEyesBanner: { type: String },
  prodEyesHeading: { type: String },
  ImageUrl: { type: String },
  Title: { type: String },
  Price: { type: Number },
  Rating: { type: Number },
  RatingTotal: { type: String },
  MainCategory: { type: String },
  category: { type: String },
  Currency: { type: String },
});

export const Product = mongoose.model("Product", productSchema);
