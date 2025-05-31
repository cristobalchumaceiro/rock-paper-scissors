// create scores to keep track of

let humanScore = 0
let computerScore = 0

// request user input choice

function getHumanChoice() {
    let choice = prompt("Make your choice: rock, paper, or scissors?")
    return choice
}

// randomly generate computer choice

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    let choice
    if (randomNumber === 0) {
        choice = "rock"
    }
    else if (randomNumber === 1) {
        choice = "paper"
    }
    else {
        choice = "scissors"
    }
    return choice
}

// play round function

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("You tied! You both chose "+humanChoice)
    }
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.")
        computerScore++
        return
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.")
        humanScore++
        return
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.")
        humanScore++
        return
    }
    if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.")
        computerScore++
        return
    }
    if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.")
        computerScore++
        return
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.")
        humanScore++
        return
    }
}

// play 5 rounds

playGame()

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice().toLowerCase()
        let computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice)
        console.log("Your score: " + humanScore, " Computer score: " + computerScore)
    }
}

// determine overall winner

if (humanScore > computerScore) {
    console.log("You win! You beat the computer!")
}
if (humanScore === computerScore) {
    console.log("You tied! You both scored the same.")
}
else if (humanScore < computerScore) {
    console.log("You lose! The computer beat you!")
}