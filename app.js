const resultText = document.querySelector("#result");
const playerText = document.querySelector("#your-score");
const computerText = document.querySelector("#computer-score");
const declareWinner = document.querySelector("#declare-winner");
const buttons = document.querySelectorAll(".game-buttons");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  choice = Math.floor(Math.random() * 3 + 1);
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
    showPick(playerSelection, computerSelection);
    if (playerScore == 5) {
      declareWinner.style.visibility = "visible";
      declareWinner.textContent = "Congratulations! You beat the machine!";
      resetGame();
    } else if (computerScore == 5) {
      declareWinner.style.visibility = "visible";
      declareWinner.textContent =
        "Oh no, the machine won. Better luck next time ...";
      resetGame();
    }
  })
);

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerDisplay.style.visibility = "hidden";
  computerDisplay.style.visibility = "hidden";
  resultText.textContent = "";
  playerText.textContent = `You: ${playerScore}`;
  computerText.textContent = `Computer: ${computerScore}`;
}

const playerDisplay = document.querySelector("#player-display");
const computerDisplay = document.querySelector("#computer-display");

function showPick(playerSelection, computerSelection) {
  playerDisplay.style.visibility = "visible";
  computerDisplay.style.visibility = "visible";
  if (playerSelection == "rock") playerDisplay.src = "./images/rock.png";
  if (playerSelection == "paper") playerDisplay.src = "./images/paper.png";
  if (playerSelection == "scissors")
    playerDisplay.src = "./images/scissors.png";
  if (computerSelection == "rock") computerDisplay.src = "./images/rock.png";
  if (computerSelection == "paper") computerDisplay.src = "./images/paper.png";
  if (computerSelection == "scissors")
    computerDisplay.src = "./images/scissors.png";
}