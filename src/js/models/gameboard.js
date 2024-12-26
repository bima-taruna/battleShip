class Gameboard {
  constructor() {
    this.board = this._populateBoard();
  }

  _populateBoard() {
    const newBoard = [];

    for (let index = 0; index < 10; index++) {
      const row = new Array(10).fill(null);
      newBoard.push(row);
    }
    return newBoard;
  }

  checkBoard() {
    return this.board;
  }

  placeShip(x, y, ship) {
    if (ship.isHorizontal) {
      for (let i = 0; i < ship.length; i++) {
        this.board[x][y + i] = "S";
      }
      return this.board;
    }
    return this.board;
  }
}

module.exports = Gameboard;
