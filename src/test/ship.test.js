const Ship = require("../js/models/ship.js");

describe("Ship", () => {
  let ship = new Ship("ambalador", 5);
  it("should return the ship name", () => {
    expect(ship.name).toBe("ambalador");
  });
  it("should increase the hitpoint when call hit() method", () => {
    ship.hit();
    expect(ship.hitPoint).toBe(1);
  });
  it("should return true if the hit point same as length", () => {
    for (let i = 1; i < ship.length; i++) {
      ship.hit();
    }
    expect(ship.isSunk()).toBe(true);
  });
  it("should change the orientation", () => {
    ship.changeOrientation();
    expect(ship.isHorizontal).toBe(false);
  });
});
