const GameboardView = require("../ui/gameboardView");
const { default: GameView } = require("../ui/gameView");

class GameController {
  constructor(player1, player2, containerElement) {
    this.player1 = player1;
    this.player2 = player2;
    this.containerElement = containerElement;
    this.currentPlayer = player1;
    // this.currentGameboardView = player1GameboardView;
    this.phase = "setup";
    this.gameView = new GameView(containerElement);
  }

  switchTurn() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
    // this.currentGameboardView = this.currentPlayer === this.player1 ? this.player1GameboardView : this.player2GameboardView;
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
    const result = opponent.gameboard.receiveAttack(x, y);
    const attackMessage = `${this.currentPlayer.name} attacks ${x}, ${y} ...`;
    this.gameView.handleGameInfo(attackMessage);
    setTimeout(() => {
      if (result.result) {
        this.gameView.handleGameInfo(
          `${attackMessage} and hit opponent's ${result.ship}!`
        );
      } else {
        this.gameView.handleGameInfo(`${attackMessage} and hit nothing!`);
      }
      this.updateBoardViews();
      if (opponent.gameboard.isShipsSunk()) {
        this.gameView.handleGameInfo(`${this.currentPlayer.name} wins!`);
        this.endGame();
      } else {
        setTimeout(() => {
          this.switchTurn();
          this.gameView.handleGameInfo(`${this.currentPlayer.name}'s turn`);
        }, 2000);
      }
    }, 1000);
  }

  placeShip(player, x, y, ship) {
    player.gameboard.placeShip(x, y, ship);
    this.updateBoardViews();
  }

  updateBoardViews() {
    if (this.phase === "playing") {
      this.player1GameboardView.updateBoard();
      this.player2GameboardView.updateBoard();
    }
  }

  startPlayingPhase() {
    this.phase = "playing";

    // First render the GameView to create the container elements
    this.gameView.render();

    // Now the container elements exist, so we can create the GameboardViews
    this.player1GameboardView = new GameboardView(
      this.player1.gameboard,
      document.getElementById("player-gameboard-container"),
      this,
      false
    );
    this.player2GameboardView = new GameboardView(
      this.player2.gameboard,
      document.getElementById("enemy-gameboard-container"),
      this,
      true
    );

    // Render the gameboards
    this.player1GameboardView.renderBoard();
    this.player2GameboardView.renderBoard();

    this.updateBoardViews();
  }

  endGame() {
    this.phase = "gameover";
  }
}

module.exports = GameController;
