import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  prodEyesBanner: String,
  prodEyesHeading: String,
  ImageUrl: String,
  Title: String,
  Price: Number,
  Rating: Number,
  RatingTotal: String,
  MainCategory: String,
  category: String,
  Currency: String,
});

export const Product = model("makeup", productSchema);
