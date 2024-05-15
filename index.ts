#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer generate a random number 
// 2) user input for guessing number 
// 3) compare user input with computer genrated number and show result

const randomnumber = Math.floor(Math.random() * 8 +1);

const answer = await inquirer.prompt([
    {
        name:"userguessednumber",
        type:"number",
        message:"please guessed a number between 1-8",
    },
]);

if (answer.userguessednumber === randomnumber) {
    console.log( "hurry you gussed right number")
} else {
    console.log ("you gussed wrong number")
}