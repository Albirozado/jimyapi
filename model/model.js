const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({


    cardapioimagem: {
        required: true,
        type: String
    },
    cardapionome: {
        required: true,
        type: String
    },
    cardapiodescri: {
        required: true,
        type: String
    },
    cardapiopreco: {
        required: true,
        type: String
    },
  

 

})

module.exports  = mongoose.model("datacardapio", dataSchema)