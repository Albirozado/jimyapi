const express = require("express")
const router = express.Router()
const modelPedido = require("../../model/modelPedidos")

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const updateData = req.body  // Dados a serem atualizados

    try {
        const updatedPedido = await modelPedido.findByIdAndUpdate(id, updateData, { new: true })
        res.json(updatedPedido)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router
