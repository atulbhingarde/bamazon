DROP DATABASE IF EXISTS bamazon; -- drop the db if it exists
-- Create a database called bamazon --
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  -- Creates a numeric column called "item_id" which will automatically increment its default value as we create new rows. --
  item_id INTEGER AUTO_INCREMENT primary key, -- item id unique and 
  product_name VARCHAR(20),
  department_name varchar(20),
  stock_quantity INTEGER,
  price decimal(10,2)
  );
insert into products(item_id,product_name,department_name,stock_quantity,price)
values (1,"hammer","tools",20,10.1),
       (2,"chisel","tools",10,5.1)
