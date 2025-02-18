class GameController {
  constructor(player1, player2, player1GameboardView, player2GameboardView) {
    this.player1 = player1;
    this.player2 = player2;
    this.player1GameboardView = player1GameboardView;
    this.player2GameboardView = player2GameboardView;
    this.currentPlayer = player1;
    // this.currentGameboardView = player1GameboardView;
    this.phase = "playing";
  }

  switchTurn() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
    // this.currentGameboardView = this.currentPlayer === this.player1 ? this.player1GameboardView : this.player2GameboardView;

    console.log(`${this.currentPlayer.name}'s turn`);
  }

  attack(x, y) {
    if (this.phase !== "playing") {
      return;
    }
    const opponent =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
    if (
      opponent.gameboard.board[x][y] === "H" ||
      opponent.gameboard.board[x][y] === "M"
    ) {
      return;
    }
    opponent.gameboard.receiveAttack(x, y);
    this.updateBoardViews();
    console.log(`${this.currentPlayer.name} attacks ${x}, ${y}`);
    if (opponent.gameboard.isShipsSunk()) {
      console.log(`${this.currentPlayer.name} wins!`);
      this.endGame();
    } else {
      this.switchTurn();
    }
  }

  placeShip(player, x, y, ship) {
    player.gameboard.placeShip(x, y, ship);
    this.updateBoardViews();
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
