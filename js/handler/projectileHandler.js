import Projectile from "../entity/projectile.js";
import { canvas } from "../main.js";
const projectiles = [];

const clearProjectiles = () => {
  projectiles.length = 0;
};

const handleProjectile = () => {
  projectiles.forEach((projectile, index) => {
    projectile.update();
    projectile.draw();

    if (projectile.x - projectile.width - 20 > canvas.width) {
      setTimeout(() => {
        projectiles.splice(index, 1);
      }, 0);
    }
  });
};

document.addEventListener("keydown", (event) => {
  if (event.code == "Space") {
    projectiles.push(new Projectile());
  }
});

export { handleProjectile, projectiles, clearProjectiles };
