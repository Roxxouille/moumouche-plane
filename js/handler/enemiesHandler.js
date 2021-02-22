import Enemy from "../entity/enemy.js";
import Explosion from "../entity/explosion.js";
import { gameFrame, setGameOver, canvas } from "../main.js";
import { explosions } from "./explosionsHandler.js";
import { player } from "./playerHandler.js";
import { projectiles } from "./projectileHandler.js";
import { setScore, getScore } from "./scoreHandler.js";

const enemies = [];

const clearEnemies = () => {
  enemies.length = 0;
};

const handleEnemies = () => {
  // spawn enemy
  if (gameFrame % 100 === 0) {
    enemies.push(new Enemy());
  }

  enemies.forEach((enemy, enemyIndex) => {
    enemy.update();
    enemy.draw();

    if (enemy.x + enemy.width + 20 < 0) {
      setTimeout(() => {
        enemies.splice(enemyIndex, 1);
      }, 0);
      console.log(enemies.length);
    }
    // Projectiles and enemies collision
    projectiles.forEach((projectile, projectileIndex) => {
      if (
        enemy.x < projectile.x + projectile.width &&
        enemy.x + enemy.width > projectile.x &&
        enemy.y < projectile.y + projectile.height &&
        enemy.height + enemy.y > projectile.y
      ) {
        explosions.push(new Explosion(enemy.x, enemy.y - enemy.height / 2));
        setScore(getScore() + 10);
        setTimeout(() => {
          projectiles.splice(projectileIndex, 1);
        }, 0);
        setTimeout(() => {
          enemies.splice(enemyIndex, 1);
        }, 0);
      }
    });

    // Player and enemies collision
    if (
      enemy.x < player.x + player.width &&
      enemy.x + enemy.width > player.x &&
      enemy.y < player.y + player.height &&
      enemy.height + enemy.y > player.y
    ) {
      setGameOver();
    }
  });
};

export { enemies, clearEnemies };
export default handleEnemies;
