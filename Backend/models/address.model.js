const { Schema, model } = require("mongoose");

const addressSchema = new Schema({
  user: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true },
  addressline1: { type: String, required: true },
  addressline2: { type: String, required: true },
  zipcode: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
});

const Address = model("address", addressSchema);
module.exports = Address;