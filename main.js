
//Users beginning score values.
let computerScore = 0;
let playerScore = 0;
const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")
const result = document.querySelector(".result")
const p = document.createElement('p')
const h2 = document.createElement('h2')
const winner = document.querySelector(".winner")
const currentPlayerScore = document.getElementById("playerscore")
const currentComputerScore = document.getElementById("computerscore")
const playAgain = document.getElementById("play-again")


//Computers function on how it chooses randomly.
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

//Function on how scores are determined
function gameRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        p.textContent = `You tied! Both choosed ${playerSelection}.`
        result.appendChild(p)
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        p.textContent = "You lost! Paper beats rock."
        result.appendChild(p)
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        p.textContent = "You won! Rock beats scissors."
        result.appendChild(p)
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        p.textContent = "You won! Paper beats rock."
        result.appendChild(p)
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        p.textContent = "You lost! Scissors beats paper."
        result.appendChild(p)
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        p.textContent = "You lost! Rock beats scissors."
        result.appendChild(p)
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        p.textContent = "You won! Scissors beats paper."
        result.appendChild(p)
    }
}

function updateScores(playerScore, computerScore) {
    currentComputerScore.textContent = `Computer: ${computerScore}`
    currentPlayerScore.textContent = `Player: ${playerScore}`

}

// Function checks for winner
function checkWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        h2.textContent = `Nice! You won ${playerScore} to ${computerScore}!`
        winner.appendChild(h2)
        endgame()
    } else if (computerScore === 5) {
        h2.textContent = `Ouch! The computer beat you ${computerScore} to ${playerScore}`
        winner.appendChild(h2)
        endgame()
    } else if (playerScore === 5 && computerScore === 5) {
        h2.textContent = `It's a tie! ${playerScore} to ${computerScore} Give it another shot`
        winner.appendChild(h2)
        endgame()
    }
}

// Rock button event listener  
rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "rock"
    gameRound(playerSelection, computerSelection)
    checkWinner(playerScore, computerScore)
    updateScores(playerScore, computerScore)
});

// Paper button event listener  
paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "paper"
    gameRound(playerSelection, computerSelection)
    checkWinner(playerScore, computerScore)
    updateScores(playerScore, computerScore)
});

// Scissors button event listener  
scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "scissors"
    gameRound(playerSelection, computerSelection)
    checkWinner(playerScore, computerScore)
    updateScores(playerScore, computerScore)
});


function endgame() {
    scissorsButton.style.visibility = 'hidden'
    rockButton.style.visibility = 'hidden'
    paperButton.style.visibility = 'hidden'
    document.getElementById('play-again').innerHTML = "<button>Play again</button>"


}

playAgain.addEventListener('click', () => {
    window.location.reload()
})

//Function and loop to allow you to take 5 turns and determine winner.
/*function game() {
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
*/