const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set('strictQuery', true);

async function main(){
        await mongoose.connect(`mongodb+srv://admin:cz35dqbDXFrcIrhq@cluster0.inxpxo8.mongodb.net/pictures?retryWrites=true&w=majority`)
        console.log('Conectado com sucesso!')
}

main().catch((err) => console.log(err))

module.export = main;