let playerScore = 0
let computerScore = 0

function computerChoice() {
    const arrayOfChoices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * 3)
    const compChoice = arrayOfChoices[randomChoice]
    return compChoice;
}


function gameRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "You tied! Both choosed rock."
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "You tied! Both choosed paper."
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "You tied! Both choosed scissors."
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


const playerSelection = "rock";
const computerSelection = computerChoice()

function game() {

    for (let i = 0; i < 5; i++) {

        gameRound(playerSelection, computerSelection)
    }
    if (playerScore > computerScore) {
        return "You win!";
    } else if (computerScore > playerScore) {
        return "You lost.";
    } else {
        return "You tied with computer.";
    }
}

console.log(game())