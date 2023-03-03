function getComputerChoice() {
    choice = Math.floor(Math.random() * 100);
    if (choice < 33) {
        return "rock"
    } else if (choice > 66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "rock") {
            return tie;
        } else if (computerSelection === "paper") {
            computerScore ++;
            return loss;
        } else {
            playerScore ++;
            return win;
        }
    } if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            playerScore ++;
            return win;
        } else if (computerSelection === "paper") {
            return tie;
        } else {
            computerScore ++;
            return loss;
        }
    } if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            computerScore ++;
            return loss;
        } else if (computerSelection === "paper") {
            playerScore ++;
            return win;
        } else {
            return tie;
        }
    }
}

let playerScore = parseInt(0)
let computerScore = parseInt(0)
let win = "You won!"
let tie = "It's a tie."
let loss = "You lost!"

function start() {
    for (let i = 0; i < 999 && playerScore < 5 && computerScore < 5; i++) {    
    let playerSelection = prompt("Choose your weapon...\n(Rock, paper, scissors");
    let computerSelection = getComputerChoice();
    console.log(currentRound = playRound(playerSelection, computerSelection));
    console.log("Your score: " + playerScore)
    console.log("Computer score: " + computerScore)
    if (playerScore == 5) {
        console.log("Congratulations! You beat the computer.");
        reset()
        break
    }else if (computerScore == 5) {
        console.log("Oh no! You got beaten by a machine...");
        reset()
        break
    }
  }
}

function reset() {
    playerScore = 0
    computerScore = 0
    i = 0
}
