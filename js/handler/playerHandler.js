import Player from "../entity/player.js";
let player;

const createPlayer = () => {
  player = new Player();
};

const handlePlayer = () => {
  player.update();
  player.draw();
};

document.addEventListener("keydown", (event) => {
  if (event.code == "ArrowUp" || event.code == "KeyW") {
    player.up = true;
  }
  if (event.code == "ArrowDown" || event.code == "KeyS") {
    player.down = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code == "ArrowUp" || event.code == "KeyW") {
    player.up = false;
  }
  if (event.code == "ArrowDown" || event.code == "KeyS") {
    player.down = false;
  }
});

export { player, createPlayer, handlePlayer };
