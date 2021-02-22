import handleBackground from "./handler/backgroundHandler.js";
import handleEnemies, { clearEnemies } from "./handler/enemiesHandler.js";
import { loadImages, isImagesLoaded } from "./handler/imagesHandler.js";
import { createPlayer, handlePlayer } from "./handler/playerHandler.js";
import { clearProjectiles, handleProjectile } from "./handler/projectileHandler.js";
import handleExplosion from "./handler/explosionsHandler.js";
import { setScore } from "./handler/scoreHandler.js";

const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext("2d");

const startGameEl = document.querySelector("#startGameEl");
const modalEl = document.querySelector("#modalEl");

let gameFrame = 0;
let gameOver = false;
let animationId;

const setGameOver = () => {
  gameOver = true;
};

const animate = () => {
  animationId = requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleBackground();
  handlePlayer();
  handleEnemies();
  handleProjectile();
  handleExplosion();
  gameFrame++;
  if (gameOver) {
    cancelAnimationFrame(animationId);
    modalEl.classList.remove("hidden");
  }
};

const init = () => {
  gameOver = false;
  createPlayer();
  setScore(0);
  clearEnemies();
  clearProjectiles();
  animate();
};

startGameEl.addEventListener('click',() => {
  if(isImagesLoaded) {
    init();
  } else {
    loadImages(init);
  }
  modalEl.classList.add("hidden");
})


export { canvas, ctx, gameFrame, setGameOver };
