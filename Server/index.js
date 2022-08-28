import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import UserRouter from "./Routes/UserRoutes.js";
import AddressRouter from "./Routes/addressRoute.js";
import CartRouter from "./Routes/cartRoute.js";
import ProductRouter from "./Routes/productRoute.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

app.listen(port, () => {
  connect();
  console.log(`server is running on port ${port}`);
});
