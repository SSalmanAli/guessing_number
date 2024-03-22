// 1) Computer will generate a random number  - done
// 2) User input for guessing number - done
// 3) Compare user input with computer generated number and show results - done
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 - 6"
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the number correctly");
}
else {
    console.log("Sorry you guessed it wrong");
}
;
