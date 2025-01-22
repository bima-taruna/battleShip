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
      [null, "A", "A", "A", "A", "A", null, null, null, null],
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
    const ship = new Ship("ambalator", 5);
    expect(testGameboard.placeShip(0, 1, ship)).toEqual(arr);
  });
  it("should place ship in the correct vertical coordinates", () => {
    const arrVertical = [
      [null, "A", "A", "A", "A", "A", null, null, null, null],
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
    const ship = new Ship("sigma", 4);
    ship.changeOrientation();
    expect(testGameboard.placeShip(2, 1, ship)).toEqual(arrVertical);
  });
  it("should send ship hit function if call receive attack fun", () => {
    const arr = [
      [null, "H", "S", "S", "S", "S", null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, "H", "M", "M", null, null, null, null, null, null],
      [null, "S", "M", null, null, null, null, null, null, null],
      [null, "S", null, null, null, null, null, null, null, null],
      [null, "S", null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ];
    testGameboard.receiveAttack(2, 1);
    testGameboard.receiveAttack(0, 1);
    testGameboard.receiveAttack(2, 2);
    testGameboard.receiveAttack(2, 3);
    testGameboard.receiveAttack(3, 2);
    expect(testGameboard.checkBoard()).toEqual(arr);
  });
});
