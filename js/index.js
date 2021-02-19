// Get canvas context + assign canvas width and height
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let gameFrame = 0; // each frame add 1, use to do time gated operation
let gameOver = false; // For now, pause the screen

// directionnal variable for the plane
let up = false;
let down = false;

let player;
let farGroundCloud1;
let farGroundCloud2;
let midGroundCloud1;
let midGroundCloud2;
let farGroundMountains;
let foreGroundMountains;
let backgroundArray;

const init = () => {
  player = new Player();
  farGroundCloud1 = imagesObjects.find(
    (image) => image.id == "farGroundCloud1"
  );
  farGroundCloud2 = imagesObjects.find(
    (image) => image.id == "farGroundCloud2"
  );
  midGroundCloud1 = imagesObjects.find(
    (image) => image.id == "midGroundCloud1"
  );
  midGroundCloud2 = imagesObjects.find(
    (image) => image.id == "midGroundCloud2"
  );
  farGroundMountains = imagesObjects.find(
    (image) => image.id == "farGroundMountains"
  );
  foreGroundMountains = imagesObjects.find(
    (image) => image.id == "foreGroundMountains"
  );
  backgroundArray = [
    {
      id: farGroundCloud1,
      x1: 0,
      x2: farGroundCloud1.width,
      y: 10,
      width: farGroundCloud1.width,
      height: farGroundCloud1.height,
      speed: 0.1,
    },
    {
      id: farGroundCloud2,
      x1: 0,
      x2: farGroundCloud2.width,
      y: 150,
      width: farGroundCloud2.width,
      height: farGroundCloud2.height,
      speed: 0.1,
    },
    {
      id: midGroundCloud1,
      x1: 0,
      x2: midGroundCloud1.width,
      y: canvas.height - midGroundCloud1.height / 1.2,
      width: midGroundCloud1.width,
      height: midGroundCloud1.height,
      speed: 0.3,
    },
    {
      id: midGroundCloud2,
      x1: 0,
      x2: midGroundCloud2.width,
      y: canvas.height - midGroundCloud2.height,
      width: midGroundCloud2.width,
      height: midGroundCloud2.height,
      speed: 0.3,
    },
    {
      id: farGroundMountains,
      x1: 0,
      x2: farGroundMountains.width,
      y: canvas.height - farGroundMountains.height,
      width: farGroundMountains.width,
      height: farGroundMountains.height,
      speed: 0.7,
    },
    {
      id: foreGroundMountains,
      x1: 0,
      x2: foreGroundMountains.width,
      y: canvas.height - foreGroundMountains.height,
      width: foreGroundMountains.width,
      height: foreGroundMountains.height,
      speed: 0.75,
    },
  ];
  animate();
};

// Make each background repeatable and moving
const handleBackground = () => {
  ctx.fillStyle = "#1BD1FF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  backgroundArray.forEach((background) => {
    background.x1 -= background.speed;
    if (background.x1 < -background.width) {
      background.x1 = background.width;
    }
    background.x2 -= background.speed;
    if (background.x2 < -background.width) {
      background.x2 = background.width;
    }

    ctx.drawImage(
      background.id,
      background.x1,
      background.y,
      background.width + 1,
      background.height
    );
    ctx.drawImage(
      background.id,
      background.x2,
      background.y,
      background.width + 1,
      background.height
    );
  });
};

const enemiesArray = [];
// Draw enemies and check collision
const handleEnemies = () => {
  // spawn enemy
  if (gameFrame % 100 === 0) {
    enemiesArray.push(new Enemy());
  }

  enemiesArray.forEach((enemy, enemyIndex) => {
    enemy.draw();
    enemy.update();

    // Projectiles and enemies collision
    projectilesArray.forEach((projectile, projectileIndex) => {
      if (
        enemy.x < projectile.x + projectile.width &&
        enemy.x + enemy.width > projectile.x &&
        enemy.y < projectile.y + projectile.height &&
        enemy.height + enemy.y > projectile.y &&
        !enemy.isDead
      ) {
        enemy.kill();
        setTimeout(() => {
          projectilesArray.splice(projectileIndex, 1);
        }, 0);
      }
    });

    // Player and enemies collision
    if (
      enemy.x < player.x + player.width &&
      enemy.x + enemy.width > player.x &&
      enemy.y < player.y + player.height &&
      enemy.height + enemy.y > player.y &&
      !enemy.isDead
    ) {
      gameOver = true;
    }
  });
};

document.addEventListener("keydown", (event) => {
  if (event.code == "ArrowUp") {
    up = true;
  }
  if (event.code == "ArrowDown") {
    down = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code == "ArrowUp") {
    up = false;
  }
  if (event.code == "ArrowDown") {
    down = false;
  }
});

const projectilesArray = [];
// Shoot new Projectile when player press spacebar
document.addEventListener("keydown", (event) => {
  if (event.code == "Space") {
    projectilesArray.push(new Projectile());
  }
});

// Draw and update Projectiles
const handleProjectiles = () => {
  projectilesArray.forEach((projectile) => {
    projectile.update();
    projectile.draw();
  });
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleBackground();
  handleEnemies();
  handleProjectiles();
  player.draw();
  player.update();
  gameFrame++;
  if (!gameOver) {
    requestAnimationFrame(animate);
  }
};

loadImages(imagesToLoad, init);
