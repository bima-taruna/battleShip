class GameController {
  constructor(player1, player2, player1GameboardView, player2GameboardView) {
    this.player1 = player1;
    this.player2 = player2;
    this.player1GameboardView = player1GameboardView;
    this.player2GameboardView = player2GameboardView;
    this.currentPlayer = player1;
    this.phase = "playing";
  }

  switchTurn() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  attack(x, y) {
    if (this.phase !== "playing") {
      return;
    }
    const opponent =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
    opponent.gameboard.receiveAttack(x, y);
    this.updateBoardViews();
    if (opponent.gameboard.isShipsSunk()) {
      console.log(`${this.currentPlayer.name} wins!`);
      this.endGame();
    } else {
      this.switchTurn();
    }
  }

  updateBoardViews() {
    this.player1GameboardView.updateBoard();
    this.player2GameboardView.updateBoard();
  }

  startPlayingPhase() {
    this.phase = "playing";
  }

  endGame() {
    this.phase = "gameover";
  }
}

module.exports = GameController;
