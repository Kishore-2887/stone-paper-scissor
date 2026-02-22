let score = JSON.parse(localStorage.getItem("rpsScore")) || {
  player: 0,
  computer: 0
};

function saveScore() {
  localStorage.setItem("rpsScore", JSON.stringify(score));
}

function updateScoreUI() {
  document.getElementById("playerScore").textContent = score.player;
  document.getElementById("computerScore").textContent = score.computer;
}

updateScoreUI();