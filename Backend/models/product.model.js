const { Schema, model } = require("mongoose");

const productSchema = new Schema({
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

const Product = model("makeup", productSchema);

module.exports = Product;