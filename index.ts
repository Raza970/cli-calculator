#!usr/bin/env-node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const start = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  let color = chalkAnimation.rainbow("LET'S START CALCULATION");
  await start();
  color.stop();
  console.log(chalk.grey`
    
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}
await welcome();

async function question() {
  const ans = await inquirer.prompt([
    // Pass your question here
    {
      type: "list",
      name: "operator",
      message: "select the operator? \n",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
    {
      type: "number",
      name: "num1",
      message: "Enter number 1: ",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter number 2: ",
    },
  ]);

  if (ans.operator == "Addition") {
    console.log(
      chalk.bgGray(`${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`)
    );
  } else if (ans.operator == "Subtraction") {
    console.log(
      chalk.bgGray(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`)
    );
  } else if (ans.operator == "Multiplication") {
    console.log(
      chalk.bgGray(`${ans.num1} * ${ans.num2} = ${ans.num1 * ans.num2}`)
    );
  } else if (ans.operator == "Division") {
    console.log(
      chalk.bgGray(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`)
    );
  }
}
// question();

async function startAgain() {
  do {
    await question();
    var again = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do you want to continue? y or n",
    });
  } while (
    again.restart == "y" ||
    again.restart == "Y" ||
    again.restart == "yes" ||
    again.restart == "YES"
  );
}
startAgain();

// let abc: (ac: number) => number;
// abc = (a:number):string=> "10"
