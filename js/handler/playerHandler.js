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
  if (event.code == "ArrowUp") {
    player.up = true;
  }
  if (event.code == "ArrowDown") {
    player.down = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code == "ArrowUp") {
    player.up = false;
  }
  if (event.code == "ArrowDown") {
    player.down = false;
  }
});

export { player, createPlayer, handlePlayer };
