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

    tt1 = thisOrder.itemId ; 
    tt2 = thisOrder.itemQuantity;
    const sqlstr = 'select count(*) from products where item_id = ' + tt1 + ' and stock_quantity > ' +tt2 +' ; ';
    // console.log(sqlstr);
    con.query(sqlstr , function( err, result )
    { 
     if (err) throw err;
     const table = cTable.getTable(result);
     console.log(table);
     // con.end();
     return table;
    });
    // drop connection avoid leakl
    con.end();
   }
};
// con.destroy();