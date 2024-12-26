class Ship {
  constructor(name, length) {
    this.length = length;
    this.name = name;
    this.hitPoint = 0;
    this.isHorizontal = true;
  }
  hit() {
    this.hitPoint++;
  }

  changeOrientation() {
    this.isHorizontal = !this.isHorizontal;
  }

  isSunk() {
    if (this.hitPoint === this.length) {
      return true;
    }
    return false;
  }
}

module.exports = Ship;
