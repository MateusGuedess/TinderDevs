const express = require('express');
const routes = require('./routes');
const server = express();
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@clusterdomateus-2sjq2.mongodb.net/omnistack8?retryWrites=true&w=majority`, {
    useNewUrlParser: true
})

server.use(express.json())

server.use(routes)

server.listen('3333', () => {
    console.log(`Rodando no ambiente ${process.env.NODE_ENV}`)
});

