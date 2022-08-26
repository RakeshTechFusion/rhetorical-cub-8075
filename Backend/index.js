const cors = require("cors");
const express = require("express");
const router = require("./routes/user.routes");
const connection = require("./DataBase/connection");
const doteenv = require("dotenv");
const app = express();

doteenv.config();
const port = process.env.PORT || 8080;
//middleware..............................................................

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routing.................................................................
app.use("/api/user", router);
app.listen(port, (req, res) => {
  console.log(`server is running on port ${port}`);
  if (connection) {
    console.log("MongoDb connected successfully");
  }
});
