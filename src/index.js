import GameController from "./js/controller/gameController.js";
import Player from "./js/models/player.js";
import Ship from "./js/models/ship.js";
import GameboardView from "./js/ui/gameboardView.js";
import "./style/gameboard.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

// const GameboardView = require("../src/js/ui/gameboardView.js");

// const gameboard = new Gameboard();
// const gameboardView = new GameboardView(
//   gameboard,
//   document.getElementById("gameboard-container")
// );

const containerElement = document.querySelector(".content");

const player1 = new Player("bima", "player");
const player2 = new Player("david", "player");

const gameController = new GameController(player1, player2, containerElement);

const player1Carrier = new Ship("Carrier", 5);
const player1Battleship = new Ship("Battleship", 4);
const player1Destroyer = new Ship("Destroyer", 3);
const player1Submarine = new Ship("Submarine", 3);
const player1PatrolBoat = new Ship("Patrol Boat", 2);

player1Battleship.changeOrientation();
const player2Carrier = new Ship("Carrier", 5);
const player2Battleship = new Ship("Battleship", 4);
const player2Destroyer = new Ship("Destroyer", 3);
const player2Submarine = new Ship("Submarine", 3);
const player2PatrolBoat = new Ship("Patrol Boat", 2);
player2Battleship.changeOrientation();
gameController.placeShip(player2, 0, 1, player2Carrier);
gameController.placeShip(player2, 2, 0, player2Battleship);
gameController.placeShip(player2, 2, 3, player2Destroyer);
gameController.placeShip(player2, 4, 3, player2Submarine);
gameController.placeShip(player2, 8, 7, player2PatrolBoat);
gameController.placeShip(player1, 0, 1, player1Carrier);
gameController.placeShip(player1, 2, 0, player1Battleship);
gameController.placeShip(player1, 2, 3, player1Destroyer);
gameController.placeShip(player1, 4, 3, player1Submarine);
gameController.placeShip(player1, 8, 7, player1PatrolBoat);
gameController.startPlayingPhase();

// const gameboardContainer = document.getElementById("gameboard-container");
// const enemyGameboardContainer = document.getElementById(
//   "enemy-gameboard-container"
// );

// const player1 = new Player("bima", "player");
// const player2 = new Player("david", "player");

// const gameController = new GameController(player1, player2, null, null);

// const player1GameboardView = new GameboardView(
//   player1.gameboard,
//   gameboardContainer,
//   gameController,
//   false
// );
// const player2GameboardView = new GameboardView(
//   player2.gameboard,
//   enemyGameboardContainer,
//   gameController,
//   true
// );

// gameController.player1GameboardView = player1GameboardView;
// gameController.player2GameboardView = player2GameboardView;
// player1GameboardView.renderBoard();
// player2GameboardView.renderBoard();
// const player1Carrier = new Ship("Carrier", 5);
// const player1Battleship = new Ship("Battleship", 4);
// const player1Destroyer = new Ship("Destroyer", 3);
// const player1Submarine = new Ship("Submarine", 3);
// const player1PatrolBoat = new Ship("Patrol Boat", 2);

// player1Battleship.changeOrientation();
// const player2Carrier = new Ship("Carrier", 5);
// const player2Battleship = new Ship("Battleship", 4);
// const player2Destroyer = new Ship("Destroyer", 3);
// const player2Submarine = new Ship("Submarine", 3);
// const player2PatrolBoat = new Ship("Patrol Boat", 2);
// player2Battleship.changeOrientation();
// gameController.placeShip(player2, 0, 1, player2Carrier);
// gameController.placeShip(player2, 2, 0, player2Battleship);
// gameController.placeShip(player2, 2, 3, player2Destroyer);
// gameController.placeShip(player2, 4, 3, player2Submarine);
// gameController.placeShip(player2, 8, 7, player2PatrolBoat);
// gameController.placeShip(player1, 0, 1, player1Carrier);
// gameController.placeShip(player1, 2, 0, player1Battleship);
// gameController.placeShip(player1, 2, 3, player1Destroyer);
// gameController.placeShip(player1, 4, 3, player1Submarine);
// gameController.placeShip(player1, 8, 7, player1PatrolBoat);
// gameController.startPlayingPhase();
