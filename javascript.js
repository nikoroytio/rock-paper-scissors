// let's define variables for scores //
let playerScore = 0
let computerScore = 0
let drawScore = 0

/* function for computers decision making */
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"]
    choice = options[Math.floor(Math.random() * options.length)]
    return choice
}