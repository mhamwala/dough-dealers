const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db_model = require('./db_model');
const { response } = require('express');
const port = 5000;

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Alloq-Origin', 'http://localhost:5000');
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
    // const products = [
    //     {name: 'Eduards'}
    // ];

    // res.send("products");
})

// Add Data
app.post('/addProduct', async (req, res) => {

    // Get Info
    const {productName, stock, basePrice} = req.body;

    try {

        // Create product
        let product = await db_model.createProduct(productName, stock, basePrice);

        console.log(product);
        res.status(200).send(product);
        
    } catch(error) {
        
        console.log(error);
        res.status(500).send(error);
    }
  })

app.listen(port, () => {
    console.log(`App Running on port ${port}.`)
})