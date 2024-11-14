const express = require("express")
const modelPedido = require("../../model/modelPedidos")
const router = express.Router()

router.delete("/:id", async (req, res) =>{
    const id = req.params.id
    try {
        await modelPedido.findByIdAndDelete(id)
        res.send("pedido deletado com sucesso")
        
    } catch (error) {
        res.status(400).json({message:error.message})

    }

})

module.exports = router