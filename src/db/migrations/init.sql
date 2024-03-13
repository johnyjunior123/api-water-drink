CREATE TABLE products (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL,
  measure VARCHAR(50) NOT NULL, 
  price FLOAT NOT NULL
);

CREATE TABLE adresses (
  id SERIAL PRIMARY KEY,
  street VARCHAR(50) NOT NULL,
  number VARCHAR(10) NOT NULL,
  neighborhood VARCHAR(50) NOT NULL,
  zipcode CHAR(8) NOT NULL,
  city VARCHAR(50) NOT NULL,
  state VARCHAR(40) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  addressId INT,
  FOREIGN KEY (addressId) REFERENCES adresses (id)
);
