// this module allows user to interact with the existing db for customers to place order
var MySecrets = require('./ReadIdPass.js');
var mysql = require('mysql');
var cTable = require('console.table');
// console.log(MySecrets.MysqlDb);
var con = mysql.createConnection({
  debug: false,
  host: "localhost",
  user: MySecrets.MySqlDb.id.replace('\r',""),
  password:MySecrets.MySqlDb.secret.replace('\r',""),
  database: 'bamazon'
});
module.exports = {
  
   processOrder: function processOrder(thisOrder, displaythis)
   {
    con.connect();
    console.log(displaythis);

    req_item_id = thisOrder.itemId ; 
    req_item_qty = thisOrder.itemQuantity;
    var sqlstr = 'select stock_quantity, price from products where item_id = ' + req_item_id + ' ; ';
    // console.log(sqlstr);
    con.query(sqlstr , function( err, result )
    { 
     if (err) throw err;
     // con.end();
     const table = cTable.getTable(result);

     jj = JSON.stringify(result);

     
     stock_quantity_on_hand = result[0].stock_quantity;
     req_item_price = result[0].price ; 

     if ( stock_quantity_on_hand >= req_item_qty  )
      { 
        console.log(' we can process the order based on the stock and order quantity !');
        con.query(sqlstr , function( err, result )
        {  
         if (err) throw err;
         console.log(" customer price is " + req_item_price);
         console.log(" customer cost for the order is " + req_item_qty * req_item_price );
         // lets update the db as a result of the transaction 
         // set the sql for that 
         new_quantity = stock_quantity_on_hand - req_item_qty ; 
         sqlstr = 'update products set stock_quantity = ' + new_quantity + ' where item_id = ' + req_item_id + ' ; ';
         console.log(sqlstr);
         /* con.query(sqlstr , function( err, result ) 
          {
            if ( err ) throw err;
            console.log('appears that the update is successful');
          }); */

        });
      } else 
      {
        console.log(' sorry its not possible to process the order based on the stock and order quenity');
      }
     // console.log(result.count('*'));
     con.end();
     return table;
    });
    // drop connection avoid leakl
    // con.end();
   }
};
// con.destroy();