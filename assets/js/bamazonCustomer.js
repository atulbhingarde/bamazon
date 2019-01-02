// this module allows user to interact with the existing db for customers to place order
var MySecrets = require('./ReadIdPass.js');
var mysql = require('mysql');
var cTable = require('console.table');

var con = mysql.createConnection({
  host: "localhost",
  user: MySecrets.MySqlDb.id.replace('\r',""),
  password:MySecrets.MySqlDb.secret.replace('\r',""),
  database: 'bamazon'
});
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM products", function (err, result) {
      if (err) throw err;
      // console.log(result);
      var table = cTable.getTable(result);
      console.log(table);
    });
  }); 
  
