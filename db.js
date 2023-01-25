const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set('strictQuery', true);

async function main(){
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.inxpxo8.mongodb.net/?retryWrites=true&w=majority`)
        console.log('Conectado com sucesso!')
}

main().catch((err) => console.log( ))

module.export = main;