var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function GetInput(thisQuestion) 
 {
  rl.question( thisQuestion, (answer) => {
  // TODO: Log the answer in a 
  tty=answer.replace('\r',"");
  console.log(`Thank you for your valuable feedback: ${tty}`+"|");
  // exit ;
// GetInput('Hi hi there 2 ');
  // rl.close();  
 }); // rl.close();
 }
GetInput('Hi hi there 1 ');
// GetInput('Hi hi there 2 ');
// rl.end();
