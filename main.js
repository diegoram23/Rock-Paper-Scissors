const choices = ["Rock", "Paper", "Scissors"]; //constant variables.

function getComputerChoice() { //The computers function
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}
console.log(getComputerChoice());


function getPlayerChoice() { //The players function.
    return prompt("Choose rock, paper, or scissors.").toLowerCase();
}
console.log(getPlayerChoice())
