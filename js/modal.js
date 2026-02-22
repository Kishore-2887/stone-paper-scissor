const rulesBtn = document.getElementById("rulesBtn");
const rulesModal = document.getElementById("rulesModal");
const closeModal = document.getElementById("closeModal");

rulesBtn.addEventListener("click", () => {
  rulesModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  rulesModal.classList.add("hidden");
});