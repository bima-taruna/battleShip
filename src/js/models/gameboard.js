class Gameboard {
  constructor() {
    this.board = this._populateBoard();
    this.ships = [];
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
    if (x < 0 || x >= 10 || y < 0 || y >= 10) {
      return;
    }
    if (this.board[x][y]) {
      return;
    }
    if (ship.isHorizontal) {
      for (let i = 0; i < ship.length; i++) {
        this.board[x][y + i] = ship.name[0].toUpperCase();
      }
      this.ships.push(ship);
      return this.board;
    }
    for (let i = x; i < ship.length + x; i++) {
      this.board[i][y] = ship.name[0].toUpperCase();
    }
    this.ships.push(ship);
    return this.board;
  }

  findShipAtCoordinate(x, y) {
    for (const ship of this.ships) {
      if (this.board[x][y] === ship.name[0].toUpperCase()) {
        return ship;
      }
    }
    return null;
  }

  receiveAttack(x, y) {
    if (x < 0 || x >= 10 || y < 0 || y >= 10) {
      return;
    }
    if (this.board[x][y] === "M" || this.board[x][y] === "H") {
      return false;
    }
    const ship = this.findShipAtCoordinate(x, y);
    if (ship) {
      ship.hit();
      this.board[x][y] = "H";
      console.log(`${ship.name} is attacked, and it hit : ${ship.hitPoint}`);
      return this.board;
    }
    this.board[x][y] = "M";

    console.log("none is attacked");
    return this.board;
  }

  isShipsSunk() {
    let status = [];
    for (const ship of this.ships) {
      status.push(ship.isSunk());
    }
    if (status.includes(false)) {
      return false;
    }
    return true;
  }
}

module.exports = Gameboard;
