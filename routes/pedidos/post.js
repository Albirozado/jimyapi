const express = require("express")
const Model = require("../../model/modelPedidos")
const router = express.Router()

router.post('/', async (req, res)=>{
    const data = new Model({
        pedidonome: req.body.pedidonome,
        pedidodescri: req.body.pedidodescri,
        pedidoquat: req.body.pedidoquat,
        pedidopreco: req.body.pedidopreco,
        pedidolocal: req.body.pedidolocal,
        pedidocont: req.body.pedidocont,
        levarcomerlocal: req.body.levarcomerlocal,
        estado: req.body.estado
       
    })
    try{
        const datasave = await data.save()

        res.status(200).json(datasave)
    }
    catch(error){
        res.status(400).json({message:error.message})

    }
    
})

module.exports = router
