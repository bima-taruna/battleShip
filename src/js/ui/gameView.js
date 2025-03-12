class GameView {
  constructor(containerElement) {
    this.container = containerElement;
  }

  render() {
    this.container.innerHTML = "";
    const gameboardContainer = document.createElement("div");
    const playerGameboardContainer = document.createElement("div");
    const enemyGameboardContainer = document.createElement("div");
    this.gameInfoContainer = document.createElement("div");
    gameboardContainer.id = "gameboard-container";
    playerGameboardContainer.id = "player-gameboard-container";
    enemyGameboardContainer.id = "enemy-gameboard-container";
    this.gameInfoContainer.id = "game-info-container";
    gameboardContainer.appendChild(playerGameboardContainer);
    gameboardContainer.appendChild(enemyGameboardContainer);
    this.container.appendChild(gameboardContainer);
    this.container.appendChild(this.gameInfoContainer);
  }

  handleGameInfo(string) {
    this.gameInfoContainer.textContent = "";
    this.gameInfoContainer.textContent = string;
  }
}

export default GameView;
