const express = require('express');
const productsRouter = require('./routes/products');
const mongoose = require('mongoose');
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require("cors");

//server
const app = express();

//parses json
app.use(bodyParser.json());

app.use(cors());

dbName = "products"
username = "admin"

mongoose.set('strictQuery', false);
mongoose.connect(
    `mongodb+srv://${username}:${process.env.PASSWORD}@cluster0.4prj4yo.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    err => {
        if(err) {
            console.log(err);
        } else {
            console.log("Connected to database");
        }
    }
);

//get method
app.get('/',(req,res) =>  {
    res.send('Hello World');
})

//middleware
app.use('/products',productsRouter);

//listen port
const port = 5000
app.listen(port, () => {
    console.log('Server is running on port 5000');
})