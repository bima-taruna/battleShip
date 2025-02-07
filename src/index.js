import "./style/gameboard.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
const Gameboard = require("../src/js/models/gameboard.js");
const GameboardView = require("../src/js/ui/gameboardView.js");

const gameboard = new Gameboard();
const gameboardView = new GameboardView(
  gameboard,
  document.getElementById("gameboard-container")
);
