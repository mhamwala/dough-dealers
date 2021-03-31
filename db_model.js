const Pool = require('pg').Pool

const pool = new Pool({
  user: 'testuser',
  host: 'localhost',
  database: 'dddatabase',
  password: 'root',
  port: 5432
});

// Get data from Products table
const getProducts = () => {
  return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM Products ORDER by id', (error, results) => {
          if(error){
              console.log('Failed to get products');
              reject(error)
          }
          resolve(results.rows);
      })
  })
}

// Create product, sample data below.. will need to change to 'body'
const createProduct = (productName, stock, basePrice) => {
  return new Promise(function (resolve, reject) {
    pool.query('INSERT INTO Products (Product_Name, Stock, Base_Price) VALUES ($1, $2, $3) RETURNING *', [productName, stock, basePrice], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new product has been added added: ${JSON.stringify(results.rows)}`)
    })
  })
}

module.exports = {
  getProducts,
  createProduct
}