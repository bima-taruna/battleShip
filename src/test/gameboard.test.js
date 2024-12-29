const Gameboard = require("../js/models/gameboard.js");
const Ship = require("../js/models/ship.js");

describe("Gameboard", () => {
  const arr = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ];
  const testGameboard = new Gameboard();

  it("should return correct array", () => {
    expect(testGameboard.board).toEqual(arr);
  });

  it("should place the ship in the correct horizontal coordinate", () => {
    const arr = [
      [null, "S", "S", "S", "S", "S", null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ];
    const arrVertical = [
      [null, "S", null, null, null, null, null, null, null, null],
      [null, "S", null, null, null, null, null, null, null, null],
      [null, "S", null, null, null, null, null, null, null, null],
      [null, "S", null, null, null, null, null, null, null, null],
      [null, "S", null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ];
    const ship = new Ship("ambalator", 5);
    expect(testGameboard.placeShip(0, 1, ship)).toEqual(arr);
  });
  it("should place ship in the correct vertical coordinates", () => {
    const arrVertical = [
      [null, "S", "S", "S", "S", "S", null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, "S", null, null, null, null, null, null, null, null],
      [null, "S", null, null, null, null, null, null, null, null],
      [null, "S", null, null, null, null, null, null, null, null],
      [null, "S", null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ];
    const ship = new Ship("ambalador", 4);
    ship.changeOrientation();
    expect(testGameboard.placeShip(2, 1, ship)).toEqual(arrVertical);
  });
});
