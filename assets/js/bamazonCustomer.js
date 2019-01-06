var MyDebug = false ; 
const inquirer  = require('./inquirer');
// try1 var bamazonCustomer  = require('./bamazonCustomer');
// try1 var bamazonCustomer1  = require('./bamazonCustomer');

const processOrder = require('./processOrder');

var ThisOrder;
const run = async () => {

  ThisOrder = await inquirer.GetOrder('this should be first');
  MyDebug &&  console.log(" here 1 item id " + ThisOrder.itemId + " Quantity " + ThisOrder.itemQuantity);
  // try1 var tt = await bamazonCustomer.displayStock('this should be second');
  MyDebug &&  console.log(" here 2 ");
  await processOrder.processOrder(ThisOrder,'this should be third');
  
  // await bamazonCustomer1.displayStock('this should be after processing order !');


  // console.log(tt);
  
}

run();
// console.log(ThisOrder);