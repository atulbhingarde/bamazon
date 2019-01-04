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
function displayStock()
 {

  con.connect(); 
  con.query('select * from products ; ', ( err, result ) => 
   { 

     if (err) throw err;
     // return result;
     var table = cTable.getTable(result);
     console.log(table);
     
  
   }
   );
  con.end();
 }
  
  displayStock();
  
  
  // GetInput('Hi hi there 2 ');
  // GetInput('Hi hi there 3 ');
  // console.log('Hi hi there 1 ');
  // console.log('Hi hi there 2 ');
