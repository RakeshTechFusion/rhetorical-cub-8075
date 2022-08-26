const { Cartmodel } = require(".././models/cart.model");
const { Product } = require(".././models/product.model");
const cartroute = Router();

export const getCartData =  async (req, res) => {
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
};

export const postToCart =  async (req, res) => {
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
};

export const incrementQty =  async (req, res) => {
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
};

export const decrementQty = async (req, res) => {
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
};

export const deleteProduct=  async (req, res) => {
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
};