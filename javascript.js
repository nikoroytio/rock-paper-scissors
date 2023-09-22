let playerScore = 0
let computerScore = 0
let drawScore = 0

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"]
    choice = options[Math.floor(Math.random() * options.length)]
    return choice
}

function game(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase()

        if (player == computer) {
            console.log("Its a Draw!")
            drawScore++
        }
        else if (
            (player == "rock" && computer == "paper") ||
            (player == "paper" && computer == "scissors") ||
            (player == "scissors" && computer == "rock")
        ) 
        {
            console.log("You Lose! " + computer + " beats " + player)
            computerScore++
        }
        else {
            console.log("You win! " + player + " beats " + computer)
            playerScore++
        }

        
}

function result() {
    if (playerScore > computerScore) {
        console.log ("Player wins with " + playerScore + " rounds won!")
    }
    else if (playerScore < computerScore) {
        console.log ("Computer wins with " + computerScore + " rounds won!")
    }

    else {
        console.log("It's a draw! Try again")
    }
}



while ((playerScore + computerScore + drawScore) < 5) {
    const computerSelection = getComputerChoice()
    let playerSelection = window.prompt("Rock, Paper or scissors? (type in your answer)")
    game(playerSelection,computerSelection)
}

result()
