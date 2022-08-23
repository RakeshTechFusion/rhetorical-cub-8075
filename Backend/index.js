const express = require("express");
const router = require("./routes/User.routes");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);
app.listen(3000, () => {
    console.log("server started at port 3000");
    }
);