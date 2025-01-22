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
        this.board[x][y + i] = ship.name[0].toUpperCase();
      }
      return this.board;
    }
    for (let i = x; i < ship.length + x; i++) {
      this.board[i][y] = ship.name[0].toUpperCase();
    }
    return this.board;
  }

  receiveAttack(x, y) {}
}

module.exports = Gameboard;
