class Enemy {
  constructor() {
    this.x = canvas.width + 200;
    this.y = Math.random() * canvas.height;
    this.speed = 1;
    this.width = 50 * (498 / 187);
    this.height = 50;
    this.image = imagesObjects.find((image) => image.id == "torpedoBlack");
    this.isDead = false;
    this.explosion = imagesObjects.find((image) => image.id == "explosion01");
    this.explosionNumber = 1;
    this.id = "_" + Math.random().toString(36).substr(2, 9);
  }

  update() {
    this.x -= this.speed;
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    if (this.isDead) {
      if (gameFrame % 10 === 0) {
        if (this.explosionNumber === 9) {
          const doomedEnemy = enemiesArray.findIndex(
            (enemy) => enemy.id === this.id
          );
          setTimeout(() => {
            enemiesArray.splice(doomedEnemy, 1);
          }, 0);
        }
        this.explosion.src = `../assets/img/explosion_effect/explosion_0${this.explosionNumber}.png`;
        this.explosionNumber++;
      }
    }
  }

  kill() {
    this.image = this.explosion;
    this.isDead = true;
  }
}
