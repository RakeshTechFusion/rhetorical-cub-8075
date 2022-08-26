const {Router} = require("express");

const Address = require(".././models/address.model")
const addressroutes = Router()

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
    try{
        const add = await Address.create(address)
        res.status(200).send(add)
    }
    catch(e){
        res.status(400).send({error:true, message:e})
    }
})

module.export = addressroutes;