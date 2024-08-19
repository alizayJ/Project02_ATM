#! /usr/bin/env node
import inquirer from "inquirer";
let my_balance = 10000;  //the amount avaiable in account
let pin = 34569; // pin
const pin_input = await inquirer.prompt([ //taking pin input
  {
    name: "pinInput",
    type: "number",
    message: "Enter your pin number: ",
  },
]);

if (pin_input.pinInput === pin) {  //checking if pin is correct
  // first if-else block
  console.log("Correct pin number!");
  console.log(`Your current balance is $${my_balance}`);

  let further_choices = await inquirer.prompt([
    {
      name: "choices",
      message: "Choose from these: ",
      type: "list",
      choices: ["Withdraw", "Check balance"],
    },
  ]);
  if (further_choices.choices === "Withdraw") {
    // second if-else block
    let withdraw_ip = await inquirer.prompt([
      {
        name: "withdraw_amount",
        message: "Choose the amount to withdraw:  ",
        type: "list",
        choices: [1000, 5000, 10000, 15000]
      },
    ]);
    my_balance -= withdraw_ip.withdraw_amount;
    if (my_balance >= 0) {       //checking if the amount to be withdrawn avaiable in bank acount
      // third if else block
      console.log(`Now your balance is $${my_balance}.`);
    } else {
      console.log(`Amount not available.`);
    }
  } else if (further_choices.choices === "Check balance") {
    console.log(`Your balance is $${my_balance}`);
  }
} else {
  // first if-else block
  console.log("Wrong pin number");
}
