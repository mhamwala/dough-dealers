# DOUGH DEALERS

## Running application
- node index.js

## Creating the lcoal user/role/db

prereq => postgres

1. Login to Superuser postgres
- `psql -U postgres`

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
    Id SERIAL not null,
    PRODUCT_NAME varchar(64),
    STOCK int,
    BASE_PRICE decimal,
    PRIMARY KEY (ID)
    );
```

7. INSERT a product
```
- INSERT INTO products (
    product_name, 
    stock, 
    base_price) 
    VALUES ('Single Cookie', 5, 3.00
    );
```

8. Grant Privileges & Sequences to testuser, to avoid 42501 error.
```
- GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO testuser;

- GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO testuser;
```

9. 