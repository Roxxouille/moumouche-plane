import Projectile from "../entity/projectile.js";
import { canvas } from "../main.js";
const overheat = document.querySelector("#overheat");
let overheating = false;
const overheatDuration = 5000;
var bar = new ProgressBar.Line(overheat, {
  strokeWidth: 1,
  easing: "easeInOut",
  duration: 800,
  color: "#FFEA82",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: { width: "100%", height: "100%" },
  from: { color: "#FFEA82" },
  to: { color: "#ED6A5A" },
  step: (state, bar) => {
    bar.path.setAttribute("stroke", state.color);
  },
});
const projectiles = [];
const cooldown = 100;
let temp = 0;
let isOnCooldown = false;
let isHolding = false;

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
    if (!isOnCooldown && !isHolding) {
      projectiles.push(new Projectile());
      temp += 1
      console.log(temp);
      bar.animate(temp / 10, () => {
        if (bar.value() >= 1) {
          console.log('ALLO');
          temp = 0;
          overheating = true;
          isOnCooldown = true;
          bar.animate(
            temp / 10,
            {
              duration: overheatDuration,
            },
            () => {
              isOnCooldown = false;
            }
          );
        }
      });
      isOnCooldown = true;
      isHolding = true;
      if (temp < 10) {
        setTimeout(() => {
          isOnCooldown = false;
        }, cooldown);
      }
    }
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code == "Space") {
    isHolding = false;
  }
});

export { handleProjectile, projectiles, clearProjectiles };
