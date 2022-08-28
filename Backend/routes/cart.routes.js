const { Router } = require("express");
const { Cartmodel } = require(".././models/cart.model");
const { Product } = require(".././models/product.model");
const cartroute = Router();

cartroute.get("/:id", async (req, res) => {
  const { id } = req.params.id;
  if (!id) {
    res.status(400).send({ message: "unauthorised" });
  }
  try {
    const data = await Cartmodel.find({ userid: id }).populate("product");
    console.log("cartdata", data);
    res.status(200).send(data);
  } catch (e) {
    res.status(404).send({ message: "error occurred" });
  }
});

cartroute.post("/", async (req, res) => {
  const data = req.body;
  if (!data) {
    res.status(400).send({ message: "no valid data" });
  }
  try {
    const res = await Cartmodel.create(data);
    res.status(200).send(res);
  } catch (e) {
    res.status(400).send({ message: e });
  }
});

cartroute.put("/:id/inc", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send({ message: "unautorize" });
  }
  try {
    const res = await Cartmodel.findByIdAndUpdate(
      id,
      { $inc: { quantity: 1 } },
      { new: true }
    ).populate("product");
    res.status(200).send(res);
  } catch (e) {
    res.status(404).send({ message: e });
  }
});

cartroute.put("/:id/dec", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send({ message: "unauthorize" });
  }
  try {
    const res = await Cartmodel.findByIdAndUpdate(
      id,
      { $inc: { quantity: -1 } },
      { new: true }
    ).populate("product");
    res.status(200).send(res);
  } catch (e) {
    res.status(404).send({ message: e });
  }
});

cartroute.delete("/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send({ message: "unauthorize" });
  }
  try {
    const res = await Cartmodel.deleteOne(id);
    res.status(200).send(res);
  } catch (e) {
    res.status(403).send({ message: e });
  }
});
module.exports = cartroute;
