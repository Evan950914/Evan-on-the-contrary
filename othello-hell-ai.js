
let currentPlayer = -1; // 白子先手
let aiPlayer;

function startGame(first) {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
  aiPlayer = first === 'ai' ? -1 : 1; // AI 當白子
  currentPlayer = -1; // 永遠白子先手
  initBoard();
  drawBoard();
  updateScores();
  if (currentPlayer === aiPlayer) setTimeout(aiMove, 500);
}
