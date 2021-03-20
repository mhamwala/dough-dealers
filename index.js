const express = require('express')
const app = express()
const port = 3000

const db_model = require('./db_model')

// app.get('/', (req, res) => {
//     res.status(200).send('Hello World!');
// })

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Alloq-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/', (req, res) => {
    db_model.getProducts()
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