const express = require("express");
const router = require("./routes/user.routes");
const addressroutes = require("./routes/address.routes");
const cartroute = require("./routes/cart.routes")
const connection = require("./DataBase/connection");
const app = express();
const port = process.env.PORT || 8080;
//middleware..............................................................
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routing.................................................................
app.use("/api/user",router)
// app.use("/address",addressroutes);
app.use("/cart",cartroute);
app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
    if(connection){
        console.log("MongoDb connected successfully");
    }
})