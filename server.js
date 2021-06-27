const express = require('express');
const app = express();
const path = require('path')
const morgan = require('morgan')
const database = require('./server/database/connection')

const dotenv = require('dotenv');
dotenv.config();

app.set('view engine','ejs');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || 3000;

app.use(morgan('tiny'))
app.use('/', require('./server/routes/router'))
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))

database();

app.listen(port, ()=>{
    console.log(`The server is running on the port: ${port}`)
});