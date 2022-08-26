const { Router } = require("express");

const addressroutes = Router()
const Address = require(".././models/address.model")

addressroutes.get("/:id",async(req, res) => {
    try{
       const add = await Address.findOne({user:req.params.id})
       res.status(200).send(data)
    }
    catch(e){
        res.status(400).send({error:true, message:"no address found"})
    }
})

addressroutes.post("/",async(req, res) => {
    let address = req.body
    console.log(address);
    if(!address){
        res.status(400).send({error:true, message:"Please provide a valid address"})
    }
    const addres = await Address(req.body)
     addres.save((err,success)=>{
        if(err){
            res.send("error")
        }
        else{
            res.send("success")
        }
     })
})

module.exports = addressroutes;