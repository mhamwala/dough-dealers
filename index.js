const express = require('express')
const app = express()
const port = 3000
const prompt = require('prompt-sync')()

const db_model = require('./db_model')

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Alloq-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

// Routes

// Index
app.get('/', (req, res) => {
    db_model.getProducts()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

// Add Data
app.post('/addProduct', (req, res) => {

    const product_name = prompt("Enter product name - ");
    const stock = prompt("Enter stock value - ");
    const base_price = prompt("Enter Base Price - ");


    db_model.createProduct(product_name, stock, base_price)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })



app.listen(port, () => {
    console.log(`App Running on port ${port}.`)
})