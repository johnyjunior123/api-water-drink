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
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL,
  role VARCHAR(50) NOT NULL,
  addressId INT,
  FOREIGN KEY (addressId) REFERENCES adresses (id)
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL,
  photo VARCHAR(50) NOT NULL, 
  price FLOAT NOT NULL,
  userId INT,
  FOREIGN KEY (userId) REFERENCES users (id)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  name VARCHAR(50) NOT NULL,
  photo VARCHAR(50) NOT NULL,
  price FLOAT NOT NULL,
  type VARCHAR(50) NOT NULL,
  quantity INT NOT NULL,
  total FLOAT NOT NULL,
  userId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users (id)
)