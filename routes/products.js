const express = require('express');
const Product = require("../models/Product");

const router = express.Router();


// fetch products -> product listesini döndürecek //get
// get product //:id -> tek bir product döndürecek //get
// create product -> yeni bir product oluşturacak //post
// update product -> bir productı güncelleme // id //put
// delete product -> bir productı silme //id //delete

//product list
router.get('/', (req,res) => {
    Product.find()
    .then((products) => {
        res.json(products);
    })
    .catch((err) => {
        res.json(err);
    })
})

//get a product
router.get('/:id', (req,res) => {
    Product.findById(req.params.id)
    .then((product) => {
        res.json(product);
    })
    .catch((err) => {
        res.json(err);
    })
})

//create a product
router.post('/', (req,res) => {
    const product = new Product({
        name: req.body.name,
        price:req.body.price,
        description:req.body.description,
    });
    product.save();
    res.json(product);
})

//update a product
router.put('/:id', (req,res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
    .then((product) => {
        res.json(product);
    })
    .catch((err) => {
        res.json(err);
    })
})

//delete a product
router.delete('/:id', (req,res) => {
    Product.findByIdAndDelete(req.params.id)
    .then((product) => {
        res.json(product);
    })
    .catch((err) => {
        res.json(err);
    })
})



//farklı dosyalardan router değişkenimizi kullanabiliriz.
module.exports = router;