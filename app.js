
const resultText = document.querySelector("#result");
const playerText = document.querySelector("#your-score");
const computerText = document.querySelector("#computer-score");
const declareWinner = document.querySelector("#declare-winner");
const buttons = document.querySelectorAll(".game-buttons");
const pickClass = document.querySelectorAll(".pick")
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
<<<<<<< Updated upstream
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
=======
  choice = Math.floor((Math.random() * 3) + 1);
  console.log(choice);
  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else if (choice == 3) {
    return "scissors";
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "rock") {
      return "It's a draw.";
    } else if (computerSelection === "paper") {
      computerScore++;
      return "You lost!";
    } else {
      playerScore++;
      return "You won!";
    }
  }
  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "You won!";
    } else if (computerSelection === "paper") {
      return "It's a draw.";
    } else {
      computerScore++;
      return "You lost!";
    }
  }
  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "You lost!";
    } else if (computerSelection === "paper") {
      playerScore++;
      return "You won!";
    } else {
      return "It's a draw.";
    }
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = button.id;
    declareWinner.style.visibility = "hidden";
    resultText.textContent = checkWinner(playerSelection, computerSelection);
    playerText.textContent = `You: ${playerScore}`;
    computerText.textContent = `Computer: ${computerScore}`;
    showPick(playerSelection, computerSelection)
    if (playerScore == 5) {
      declareWinner.style.visibility = "visible";
      declareWinner.textContent = "You won!";
      resetGame();
    } else if (computerScore == 5) {
      declareWinner.style.visibility = "visible";
      declareWinner.textContent = "You lost!";
      resetGame();
>>>>>>> Stashed changes
    }
  })
);

<<<<<<< Updated upstream
function reset() {
    playerScore = 0
    computerScore = 0
    i = 0
=======
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  pickClass.forEach( e => e.style.visibility = "hidden")
  resultText.textContent = "Choose a weapon...";
  playerText.textContent = `You: ${playerScore}`;
  computerText.textContent = `Computer: ${computerScore}`;
>>>>>>> Stashed changes
}


const comRock = document.querySelector("#pick-com-rock");
const comPaper = document.querySelector("#pick-com-paper");
const comScissors = document.querySelector("#pick-com-scissors");
const youRock = document.querySelector("#pick-you-rock");
const youPaper = document.querySelector("#pick-you-paper");
const youScissors = document.querySelector("#pick-you-scissors");

function showPick (playerSelection, computerSelection) {
  pickClass.forEach( e => e.style.visibility = "hidden")
  if (computerSelection == "rock") comRock.style.visibility = "visible";
  if (computerSelection == "paper") comPaper.style.visibility = "visible";
  if (computerSelection == "scissors") comScissors.style.visibility = "visible";
  if (playerSelection == "rock") youRock.style.visibility = "visible";
  if (playerSelection == "paper") youPaper.style.visibility = "visible";
  if (playerSelection == "scissors") youScissors.style.visibility = "visible";
}