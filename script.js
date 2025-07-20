// create scores to keep track of

let humanScore = 0
let computerScore = 0

// randomly generate computer choice

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    let choice
    if (randomNumber === 0) {
        choice = "Rock"
    }
    else if (randomNumber === 1) {
        choice = "Paper"
    }
    else {
        choice = "Scissors"
    }
    return choice
}

// play round function

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = "You tied! You both chose " + humanChoice
    }
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        result.textContent = "Computer chose " + computerChoice + ", you lose this round!"
        computerScore++
        return
    }
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        result.textContent = "Computer chose " + computerChoice + ", you win this round!"
        humanScore++
        return
    }
    if (humanChoice === "Paper" && computerChoice === "Rock") {
        result.textContent = "Computer chose " + computerChoice + ", you win this round!"
        humanScore++
        return
    }
    if (humanChoice === "Paper" && computerChoice === "Scissors") {
        result.textContent = "Computer chose " + computerChoice + ", you lose this round!"
        computerScore++
        return
    }
    if (humanChoice === "Scissors" && computerChoice === "Rock") {
        result.textContent = "Computer chose " + computerChoice + ", you lose this round!"
        computerScore++
        return
    }
    if (humanChoice === "Scissors" && computerChoice === "Paper") {
        result.textContent = "Computer chose " + computerChoice + ", you win this round!"
        humanScore++
        return
    }
}

// create GUI elements for DOM manipulation

const buttons = document.querySelectorAll("button")
const rounds = document.querySelector("#rounds")
const pScore = document.querySelector("#pScore")
const cScore = document.querySelector("#cScore")
const result = document.querySelector("#result")
const gameOver = document.querySelector("#gameOver")
const replay = document.querySelector("#replay")
const replayBtn = document.createElement("button")
replayBtn.textContent = "Replay"
let round = 0

buttons.forEach(button => button.addEventListener("click", playGame))

// function implementing game logic and reporting results in interface

function playGame(e) {
    let humanChoice = e.target.textContent
    let computerChoice = getComputerChoice()

    playRound(humanChoice, computerChoice)
    round++
    rounds.textContent = "Round" + " " + round + " " + "out of 5"
    pScore.textContent = "Player Score: " + humanScore
    cScore.textContent = "Computer Score: " + computerScore

    if (round === 5) {
        buttons.forEach(button => button.removeEventListener("click", playGame))
        if (humanScore > computerScore) {
            gameOver.textContent = "You win! You beat the computer!"
            }
        else if (humanScore === computerScore) {
            gameOver.textContent = "You tied! You both scored the same."
            }
        else {
            gameOver.textContent = "You lose! The computer beat you!"
        }
        replay.addEventListener("click", replayGame)
        replay.appendChild(replayBtn)
    }
}

// function for resetting scores and GUI to replay game

function replayGame() {
    round = 0
    humanScore = 0
    computerScore = 0
    rounds.textContent = ""
    pScore.textContent = ""
    cScore.textContent = ""
    result.textContent = ""
    gameOver.textContent = ""
    replayBtn.removeEventListener("click", replayGame)
    replayBtn.remove()
    buttons.forEach(button => button.addEventListener("click", playGame))
}