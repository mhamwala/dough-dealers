# DOUGH DEALERS

## Running application
- node index.js

## Creating the lcoal user/role/db

prereq => postgres

1. Login to Superuser postgres
- `psql -d postgres`

2. Creating the testuser 
- `CREATE ROLE testuser WITH LOGIN PASSWORD 'root';`

3. Giving the testuser permissions to create dbs
- `ALTER ROLE testuser CREATEDB;`

4. Logout of master postgres and login with testuser
- `\q`
- `psql -d postgres -U testuser`

5. Create the DB
- `CREATE DATABASE DDdatabase;`

6. CREATE Products table
```
- CREATE TABLE products (
    ID int NOT NULL AUTO_INCREMENT,
    PRODUCT_NAME varchar(64),
    STOCK int,
    BASE_PRICE decimal,
    PRIMARY KEY (ID)
    );
```

7. INSERT a product
```
- INSERT INTO products (
    id,
    product_name, 
    stock, 
    base_price) 
    VALUES (1, 'Single Cookie', 5, 3.00
    );
```