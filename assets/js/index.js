const inquirer  = require('./inquirer');
const bamazonCustomer  = require('./bamazonCustomer');
const processOrder = require('./processOrder');

var ThisOrder;
const run = async () => {

  ThisOrder = await inquirer.GetOrder('this should be first');
  console.log(" here 1 item id " + ThisOrder.itemId + " Quantity " + ThisOrder.itemQuantity);
  const tt = await bamazonCustomer.displayStock('this should be second');
  console.log(" here 2 ");
  await processOrder.processOrder(ThisOrder,'this should be third');
  tt = await bamazonCustomer.displayStock('this should be after processing order !');


  // console.log(tt);
  
}

run();
// console.log(ThisOrder);