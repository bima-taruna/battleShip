class GameController {
  constructor(player1, player2, player1GameboardView, player2GameboardView) {
    this.player1 = player1;
    this.player2 = player2;
    this.player1GameboardView = player1GameboardView;
    this.player2GameboardView = player2GameboardView;
    this.currentPlayer = player1;
    this.phase = "setup";
  }

  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }
}
