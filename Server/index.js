import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./Routes/UserRoutes.js";
import AddressRouter from "./Routes/addressRoute.js";
import CartRouter from "./Routes/cartRoute.js";
import ProductRouter from "./Routes/productRoute.js";
const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8080;
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/user", UserRouter);
app.use("/api/address", AddressRouter);
app.use("/api/cart", CartRouter);
app.use("/api/products", ProductRouter);

app.listen(8080, () => {
  connect();
  console.log("server is running on port 8080");
});
