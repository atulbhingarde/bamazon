const inquirer   = require('inquirer');
const PromptForId = "Please enter the id of the item you want to purchase : ";
const PromptForQty = "Please enter the qty of the item you want to purchase : ";
module.exports = {

  GetOrder: (displaythis) => {
    console.log(displaythis);
    const questions = [{ name: 'itemId', type: 'input', message: PromptForId,
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return PromptForId;
          }
        }
      },
      { name: 'itemQuantity', type: 'input', message: PromptForQty,
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return PromptForQty;
          }
        }
      }
        
    ];
    return inquirer.prompt(questions);
  },
};
