const Pool = require('pg').Pool

const pool = new Pool({
    user: 'testuser',
    host: 'localhost',
    database: 'dddatabase',
    password: 'root',
    port: 5432
});

const getProducts = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM products ORDER by id', (error, results) => {
            if(error){
                console.log('Failed to get products');
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

module.exports = {
    getProducts
}