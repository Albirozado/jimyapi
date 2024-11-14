const express = require("express")
const modelPedido = require("../../model/modelPedidos")
const router = express.Router()

router.get("/", async (req, res)=>{
    try{
        const  data = await modelPedido.find()
        res.json(data)
    }
    catch(error){
        res.status(400).json({message:error.message})

    }
})

router.get("/:id", async (req, res)=>{
    const id = req.params.id
    try {
        const dataID = await modelPedido.findById(id)
        res.json(dataID)
        
    } catch (error) {
        res.status(400).json({message:error.message})

    }
})


module.exports = router