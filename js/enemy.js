class Enemy {
  constructor() {
    this.x = canvas.width + 200;
    this.y = Math.random() * canvas.height;
    this.speed = Math.random() * (2 - 1 ) + 1;
    this.width = 50 * (498 / 187);
    this.height = 50;
    this.image = imagesObjects.find((image) => image.id == "torpedoBlack");
    this.isDead = false;
    this.explosion = imagesObjects.find((image) => image.id == "explosion");
    this.currentFrame = 0;
    this.id = "_" + Math.random().toString(36).substr(2, 9);
    this.frameWidth = 1786 / 3;
    this.frameHeight = 1536 / 3;
    this.numRows = 3;
    this.numColumns = 3;
    this.row = 0;
    this.column = 0;
  }

  update() {
    this.x -= this.speed;
  }

  draw() {
    if (!this.isDead) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      if (gameFrame % 15 === 0) {
        this.currentFrame++;
        if (this.currentFrame === 9) {
          const doomedEnemy = enemiesArray.findIndex(
            (enemy) => enemy.id === this.id
          );
          setTimeout(() => {
            enemiesArray.splice(doomedEnemy, 1);
          }, 0);
        }
        if (this.currentFrame - 1 <= 2) {
          this.column = this.currentFrame - 1;
          this.row = 0;
        }
        if (this.currentFrame - 1 >= 3 && this.currentFrame - 1 <= 5) {
          this.row = 1;
          this.column = this.currentFrame == 3 ? 0 : this.currentFrame == 4 ? 1 : 2
        }
        if(this.currentFrame - 1 >= 6) {
          this.row = 2;
          this.column = this.currentFrame == 6 ? 0 : this.currentFrame == 7 ? 1 : 2
        }

      }
      ctx.drawImage(
        this.explosion,
        this.column * this.frameWidth,
        this.row * this.frameHeight,
        this.frameWidth,
        this.frameHeight,
        this.x,
        this.y,
        50 * (1786 / 3 / (1536 / 3)),
        50
      );
    }
  }

  kill() {
    this.image = this.explosion;
    this.isDead = true;
  }
}
