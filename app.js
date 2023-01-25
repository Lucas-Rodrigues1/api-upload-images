const express = require('express');
const app = express();
require('dotenv').config();
require('./db');

const port = process.env.PORT || 3000;


const pictureRouter = require("./router/picture")

app.use('/pictures', pictureRouter)

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});

