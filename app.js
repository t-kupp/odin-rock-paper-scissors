const resultText = document.querySelector("#result");
const playerText = document.querySelector("#your-score");
const computerText = document.querySelector("#computer-score");
const declareWinner = document.querySelector("#declare-winner");
const buttons = document.querySelectorAll(".game-buttons");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  choice = Math.floor(Math.random() * 3 + 1);
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
  pickClass.forEach((e) => (e.style.outline = "1px solid transparent"));
  resultText.textContent = "First to get a score of 5 wins.";
  playerText.textContent = `You: ${playerScore}`;
  computerText.textContent = `Computer: ${computerScore}`;
}

const pickClass = document.querySelectorAll(".game-buttons");
const pickRock = document.getElementById("rock");
const pickPaper = document.getElementById("paper");
const pickScissors = document.getElementById("scissors");

function showPick(playerSelection, computerSelection) {
  pickClass.forEach((e) => (e.style.outline = "1px solid transparent"));
  if (playerSelection == "rock")
    pickRock.style.outline = "solid 1px lightgreen";
  if (playerSelection == "paper")
    pickPaper.style.outline = "solid 1px lightgreen";
  if (playerSelection == "scissors")
    pickScissors.style.outline = "solid 1px lightgreen";
  if (computerSelection == "rock") pickRock.style.outline = "solid 1px red";
  if (computerSelection == "paper") pickPaper.style.outline = "solid 1px red";
  if (computerSelection == "scissors")
    pickScissors.style.outline = "solid 1px red";
  if (playerSelection == "rock" && computerSelection == "rock")
    pickRock.style.outline = "solid 1px orange";
  if (playerSelection == "paper" && computerSelection == "paper")
    pickPaper.style.outline = "solid 1px orange";
  if (playerSelection == "scissors" && computerSelection == "scissors")
    pickScissors.style.outline = "solid 1px orange";
}
