class Ship {
  hitPoint = 0;
  constructor(name, length) {
    this.length = length;
    this.name = name;
  }
  hit() {
    this.hitPoint++;
  }

  isSunk() {
    if (this.hitPoint === this.length) {
      return true;
    }
    return false;
  }
}

module.exports = Ship;
