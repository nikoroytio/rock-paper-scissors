const results = document.createElement("div");
results.id = "results";

const resultText = document.createElement("span");
results.appendChild(resultText);

const container = document.getElementById("container");
container.insertAdjacentElement('afterend', results);

const rematchButton = document.getElementById("rematch");

// let's define variables for scores //
let playerScore = 0
let computerScore = 0

/* function for computers decision making */
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"]
    choice = options[Math.floor(Math.random() * options.length)]
    return choice
}

function gameResult() {

    if (playerScore >= 5 || computerScore >= 5) {
        rematchButton.style.display = "block";
        if (playerScore > computerScore) {
            resultText.textContent = "Player wins with " + playerScore + " rounds won!" ;
            applyFadeInAnimation(results);
        }
        else if (playerScore < computerScore) {
            resultText.textContent = "Computer wins with " + computerScore + " rounds won!" ;
            applyFadeInAnimation(results);
        }

        else {
            resultText.textContent = "It's a draw! Try again" ;
            applyFadeInAnimation(results);
        }
    }
}

//function for starting the game over//

rematchButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    rematchButton.style.display = "none";
    results.textContent = "";
});

// function for results fade-in animation //

function applyFadeInAnimation(element) {

    element.classList.remove('fade-in');


    void element.offsetWidth;

    element.classList.add('fade-in');
}




document.querySelectorAll("#container > button ").forEach(button => {
    button.addEventListener('click', function(){
        const computerSelection = getComputerChoice()
        const playerSelection = this.id ;
        let player = playerSelection.toLowerCase();
        let computer = computerSelection.toLowerCase();

        if (player == computer) {
            playerScore ++ ;
            computerScore ++ ;
            resultText.textContent = "Its a Draw! players score: " + playerScore + " computers score: " + computerScore ;
            applyFadeInAnimation(results);
        }
        else if (
            (player == "rock" && computer == "paper") ||
            (player == "paper" && computer == "scissors") ||
            (player == "scissors" && computer == "rock")
            
        ) 
        {
            computerScore ++ ;
            resultText.textContent = "You Lose! " + computer + " beats " + player + ". Players score: " + playerScore + " computers score: " + computerScore ;
            applyFadeInAnimation(results);
            
        }
        else {
            playerScore++ ;
            resultText.textContent = "You win! " + player + " beats " + computer + ". Players score: " + playerScore + " computers score: " + computerScore ;
            applyFadeInAnimation(results);
            
        }

        results.appendChild(resultText);
        applyFadeInAnimation(results);

        gameResult();

        
        });
    });




