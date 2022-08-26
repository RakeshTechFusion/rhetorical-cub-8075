const mongoose = require("mongoose");
require("dotenv").config();
const database = process.env.DATABASE;
const connection = async () => {
  try {
    const connected = await mongoose.connect(
      "mongodb+srv://sugarcosmetic:sugarcosmetic@cluster0.quoaz1y.mongodb.net/sugarcosmetic?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDb Connected successfully`);
  } catch (error) {
    console.log(`Error occurred, ${error.message}`);
  }
};
module.exports = connection;
