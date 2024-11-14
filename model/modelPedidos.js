const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({


    pedidonome: {
        required: true,
        type: String
    },
    pedidodescri: {
        required: true,
        type: String
    },
    pedidoquat: {
        required: true,
        type: String
    },
    pedidopreco: {
        required: true,
        type: String
    },
    pedidolocal: {
        required: true,
        type: String
    },
    pedidocont: {
        required: true,
        type: String
    },
    levarcomerlocal: {
        required: true,
        type: String
    },
    estado: {
        required: true,
        type: Boolean
    },


 

})

module.exports  = mongoose.model("pedidoscliente", dataSchema)