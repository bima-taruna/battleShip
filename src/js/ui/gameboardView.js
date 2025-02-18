class GameboardView {
  constructor(gameboard, containerElement, gameController) {
    this.gameboard = gameboard;
    this.container = containerElement;
    this.gameController = gameController;
  }

  renderBoard() {
    this.container.innerHTML = "";
    for (let x = 0; x < 10; x++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let y = 0; y < 10; y++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.dataset.x = x;
        cell.dataset.y = y;

        if (this.gameboard.board[x][y] === "H") {
          cell.classList.add("hit");
        } else if (this.gameboard.board[x][y] === "M") {
          cell.classList.add("miss");
        } else if (this.gameboard.board[x][y]) {
          cell.classList.add("ship");
        }

        cell.addEventListener("click", this.handleCellClick.bind(this));

        row.appendChild(cell);
      }
      this.container.appendChild(row);
    }
  }

  handleCellClick(event) {
    const x = parseInt(event.target.dataset.x, 10);
    const y = parseInt(event.target.dataset.y, 10);
    this.gameController.attack(x, y);
  }

  updateBoard() {
    this.renderBoard();
  }
}

module.exports = GameboardView;
