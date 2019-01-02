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
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function GetInput(thisQuestion) {
rl.question(thisQuestion, (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
}); 
}

con.connect(function(err) 
  { var i=0; 
    // GetInput("ha ha ");
    do 
     {
      if (err) throw err;
      con.query
       ("SELECT * FROM products", function (err, result) 
        {
         if (err) throw err;
         // console.log(result);
         var table = cTable.getTable(result);
         console.log(table);
        }
       );
      // get the id of the item 
      // get the quantity of the item and check if the stock is sufficient for the order
      // GetInput("hi there ");
     } while ( i++ < 5 );
  }
  ); 