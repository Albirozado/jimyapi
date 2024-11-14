const Model = require("../../model/model")
const express = require("express")
const router = express.Router()


router.post('/', async (req, res) =>{
    const data = new Model({
        cardapioimagem: req.body.cardapioimagem,
        cardapionome: req.body.cardapionome,
        cardapiodescri: req.body.cardapiodescri,
        cardapiopreco: req.body.cardapiopreco,
    })
    try{
        const datasave = await data.save()

        res.status(200).json(datasave)
    }
    catch(error){
        res.status(400).json({message:error.message})

    }
    
})

//export default router
module.exports = router