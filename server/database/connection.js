const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connect = async() =>{
    try{
        const connection = await mongoose.connect(process.env.DATA_BASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
        })
        console.log(`Connected to the database : ${connection.connection.host}`)
    } catch(err) {
        console.log(err);
    }
}

module.exports = connect;