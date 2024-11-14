const express = require("express")
const Model = require("../../model/model")
const router =express.Router()

router.delete("/:id", async (req, res)=>{
    try {
        const id = req.params.id;
        await Model.findByIdAndDelete(id)
        res.send("dado deletado")
        
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router