// this module allows user to interact with the existing db for customers to place order
var MySecrets = require('./ReadIdPass.js');
var mysql = require('mysql');
var cTable = require('console.table');
// console.log(MySecrets.MysqlDb);
// console.log(con);
const con = mysql.createConnection({
  debug: false,
  host: "localhost",
  user: MySecrets.MySqlDb.id.replace('\r',""),
  password:MySecrets.MySqlDb.secret.replace('\r',""),
  database: 'bamazon'
});
// console.log(con);
module.exports = {
  displayStock: function displayStock(displaythis)
   {
    console.log(displaythis);
    
    con.connect();
    con.query('select * from products ; ', function( err, result ) 
    { 
     if (err) throw err;
     con.end();
     const table = cTable.getTable(result);
     console.log(table);
     // con.end();
     return table;
    });
    // drop connection avoid leakl
    // con.disconnect();
  }

};
// con.destroy();
