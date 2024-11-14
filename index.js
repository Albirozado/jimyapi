//import express from "express"
//import bodyParser from "body-parser"
//import mongoose from "mongoose"
const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const usersRoutes = require("./routes/users")
const postCardapio = require("./routes/cardapio/post")
const postPedido = require("./routes/pedidos/post")
const getCardapio = require("./routes/cardapio/get")
const bodyParser = require("body-parser")
const deleteCardapio = require("./routes/cardapio/delete")
const getPedidos = require("./routes/pedidos/get")
const deletePedidos = require("./routes/pedidos/delete")
const updatePedido = require("./routes/pedidos/update")


//import dotenv from 'dotenv';
//import usersRoutes from "./routes/users.js"
//import postCardapio from './routes/cardapio/post.js'


const app = express();
const PORT = 5000;
const mongoString = process.env.DATABASE_URL

app.use(bodyParser.json());

mongoose.connect(mongoString)
const database = mongoose.connection

database.on("erro", (error) =>{
    console.log(error)
})

database.once("connected", ()=>{
    console.log("database connected")
})


app.use('/users', usersRoutes)
app.use('/cardapio/post', postCardapio)
app.use('/pedidos/post', postPedido)
app.use('/cardapio/get', getCardapio)
app.use('/cardapio/delete/', deleteCardapio)
app.use('/pedidos/get/', getPedidos)
app.use('/pedidos/delete/', deletePedidos)
app.use('/pedidos/updatepedido/', updatePedido)




app.get('/', (req, res) =>{res.send("hello from home")})
 
app.listen(PORT, () => console.log(`servidor corendo na porta: http://localhost:${PORT}`))