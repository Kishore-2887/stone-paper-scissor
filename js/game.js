const gameView = document.getElementById("gameView");
const resultView = document.getElementById("resultView");
const hurrayView = document.getElementById("hurrayView");

const playerPick = document.getElementById("playerPick");
const computerPick = document.getElementById("computerPick");
const resultText = document.getElementById("resultText");

const choices = document.querySelectorAll(".choice");

const icons = {
  rock: "✊",
  paper: "✋",
  scissors: "✌"
};

function getComputerChoice() {
  const options = ["rock","paper","scissors"];
  return options[Math.floor(Math.random()*3)];
}

function checkWinner(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) return "player";
  return "computer";
}
function switchView(view) {
  document.querySelectorAll(".view").forEach(v => {
    v.classList.add("hidden");
  });

  view.classList.remove("hidden");
}

// function switchView(view) {
//   gameView.classList.add("hidden");
//   resultView.classList.add("hidden");
//   hurrayView.classList.add("hidden");

//   view.classList.remove("hidden");
// }

choices.forEach(btn => {
  btn.addEventListener("click", () => {

    const player = btn.dataset.choice;
    const computer = getComputerChoice();
    const winner = checkWinner(player, computer);

    playerPick.textContent = icons[player];
    computerPick.textContent = icons[computer];

    playerPick.classList.remove("winner-ring");
    computerPick.classList.remove("winner-ring");

    if (winner === "player") {
      score.player++;
      playerPick.classList.add("winner-ring");
      saveScore();
      updateScoreUI();
      switchView(hurrayView);
    } 
    else if (winner === "computer") {
      score.computer++;
      computerPick.classList.add("winner-ring");
      resultText.textContent = "YOU LOST";
      saveScore();
      updateScoreUI();
      switchView(resultView);
    }
    else {
      resultText.textContent = "TIE UP";
      switchView(resultView);
    }

  });
});

document.getElementById("playAgainBtn").addEventListener("click", () => {
  switchView(gameView);
});

document.getElementById("hurrayPlayBtn").addEventListener("click", () => {
  switchView(gameView);
});