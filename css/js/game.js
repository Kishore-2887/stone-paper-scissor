const options = ["rock", "paper", "scissors"];
const resultSection = document.getElementById("resultSection");
const resultText = document.getElementById("resultText");
const playerPick = document.getElementById("playerPick");
const computerPick = document.getElementById("computerPick");
const playAgainBtn = document.getElementById("playAgainBtn");

let playerScore = score.player;
let computerScore = score.computer;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
function checkWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }

  return "computer";
}
const choices = document.querySelectorAll(".choice");

choices.forEach(button => {
  button.addEventListener("click", () => {

    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();

    const winner = checkWinner(playerChoice, computerChoice);

    if (winner === "player") {
      playerScore++;
      score.player++;
      resultText.textContent = "YOU WIN";
    } 
    else if (winner === "computer") {
      computerScore++;
      score.computer++;
      resultText.textContent = "YOU LOST";
    } 
    else {
      resultText.textContent = "TIE UP";
    }

    saveScore();
    updateScoreDisplay();

    showResult(playerChoice, computerChoice);

  });
});
function showResult(player, computer) {

  document.querySelector(".game-area").classList.add("hidden");
  resultSection.classList.remove("hidden");

  playerPick.textContent = player.toUpperCase();
  computerPick.textContent = computer.toUpperCase();
}
playAgainBtn.addEventListener("click", () => {
  resultSection.classList.add("hidden");
  document.querySelector(".game-area").classList.remove("hidden");
});