const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set('strictQuery', true);

async function main(){
        await mongoose.connect(process.env.MONGO_CON)
        console.log('Conectado com sucesso!')
}

main().catch((err) => console.log(err))

module.export = main;