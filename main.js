
// Variables
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
const gameWon = new Audio("audio/gameWon.mp3")
const gameLost = new Audio("audio/gameLost.wav")
const iconTouch = new Audio("audio/iconTouch.wav")



// How computer generates random choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

// How scores are determined
function gameRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        p.textContent = `Tie, both chose ${playerSelection}.`
        result.appendChild(p)
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        p.textContent = "The computer scored, paper beats rock."
        result.appendChild(p)
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        p.textContent = "You scored, rock beats scissors."
        result.appendChild(p)
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        p.textContent = "You scored, paper beats rock."
        result.appendChild(p)
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        p.textContent = "The computer scored, scissors beats paper."
        result.appendChild(p)
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        p.textContent = "The computer scored, rock beats scissors."
        result.appendChild(p)
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        p.textContent = "You scored, scissors beats paper."
        result.appendChild(p)
    }
}

// Keeps track of scores
function updateScores(playerScore, computerScore) {
    currentComputerScore.textContent = `Computer: ${computerScore}`
    currentPlayerScore.textContent = `Player: ${playerScore}`

}


// Checks for winner
function checkWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        h2.textContent = `Nice! You won ${playerScore} to ${computerScore}`
        winner.appendChild(h2)
        endgame()
        p.textContent = ""
        result.appendChild(p)
        gameWon.play()

    } else if (computerScore === 5) {
        h2.textContent = `Ouch! The computer beat you ${computerScore} to ${playerScore}`
        winner.appendChild(h2)
        endgame()
        p.textContent = ""
        result.appendChild(p)
        gameLost.play()
    } else if (playerScore === 5 && computerScore === 5) {
        h2.textContent = `It's a tie! ${playerScore} to ${computerScore} Give it another shot`
        winner.appendChild(h2)
        endgame()
        p.textContent = ""
        result.appendChild(p)
        gameLost.play()
    }
}



// Rock button event listener  
rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "rock"
    gameRound(playerSelection, computerSelection)
    checkWinner(playerScore, computerScore)
    updateScores(playerScore, computerScore)
    iconTouch.currentTime = 0;
    iconTouch.play()
});


// Paper button event listener  
paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "paper"
    gameRound(playerSelection, computerSelection)
    checkWinner(playerScore, computerScore)
    updateScores(playerScore, computerScore)
    iconTouch.currentTime = 0;
    iconTouch.play()
});


// Scissors button event listener  
scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "scissors"
    gameRound(playerSelection, computerSelection)
    checkWinner(playerScore, computerScore)
    updateScores(playerScore, computerScore)
    iconTouch.currentTime = 0;
    iconTouch.play()
});


// Stops game when someone reaches 5 points
function endgame() {
    scissorsButton.style.visibility = 'hidden'
    rockButton.style.visibility = 'hidden'
    paperButton.style.visibility = 'hidden'
    document.getElementById('play-again').innerHTML = "<div>Play again!</div>"
}

// Restart game/refresh page
playAgain.addEventListener('click', () => {
    playAgain.style.transition = "2s"
    window.location.reload()
})


