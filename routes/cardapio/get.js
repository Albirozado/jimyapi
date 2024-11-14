const express = require("express")
const Model = require("../../model/model")
const router = express.Router()

router.get("/", async (req, res)=>{
    try{
        const data = await Model.find()
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
   
})

router.get("/:id", async (req, res)=>{
    try{
        const dataID = await Model.findById(req.params.id)
        res.json(dataID)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
   
})


module.exports =  router