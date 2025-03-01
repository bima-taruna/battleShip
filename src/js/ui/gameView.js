class GameView {
  constructor(containerElement) {
    this.container = containerElement;
  }

  render() {
    this.container.innerHTML = "";

    const playerGameboardContainer = document.createElement("div");
    const enemyGameboardContainer = document.createElement("div");
    const gameInfoContainer = document.createElement("div");

    playerGameboardContainer.id = "player-gameboard-container";
    enemyGameboardContainer.id = "enemy-gameboard-container";
    gameInfoContainer.id = "game-info-container";

    this.container.appendChild(playerGameboardContainer);
    this.container.appendChild(enemyGameboardContainer);
    this.container.appendChild(gameInfoContainer);
  }
}

export default GameView;
