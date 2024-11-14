const express = require("express")
const router = express.Router()
const modelPedido = require("../../model/modelPedidos")

router.put('/:id', async (req, res) =>{
    const id = req.params.id
    try{
        const updateData = await modelPedido.findByIdAndUpdate(id, {new:true})
        res.json(updateData)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

module.exports = router