class GameboardView {
  constructor(gameboard, containerElement) {
    this.gameboard = gameboard;
    this.container = containerElement;
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
        row.appendChild(cell);
      }
      this.container.appendChild(row);
    }
  }

  updateBoard() {
    this.renderBoard();
  }
}

module.exports = GameboardView;
