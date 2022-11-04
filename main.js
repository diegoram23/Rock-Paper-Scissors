
//Users beginning score values.
let computerScore = 0; 
let playerScore = 0;

//Computers function on how it chooses randomly.
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

//Function on how scores are determined
function gameRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You tied! Both choosed ${playerSelection}.`
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "You lost! Paper beats rock."
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return "You won! Rock beats scissors."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You won! Paper beats rock."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "You lost! Scissors beats paper."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "You lost! Rock beats scissors."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "You won! Scissors beats paper."
    }
}

//Function and loop to allow you to take 5 turns and determine winner.
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose your weapon.", "Rock, paper, or scissors").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log("", gameRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) {
        return "You won. You beat the computer";
    } else if (playerScore < computerScore) {
        return "You lost. The computer beat you";
    } else {
        return "The final score is a draw."
    }
}
console.log(game())