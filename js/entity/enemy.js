import { canvas, ctx, gameFrame } from "../main.js";
import { images } from "../handler/imagesHandler.js";

class Enemy {
  constructor() {
    this.id = "_" + Math.random().toString(36).substr(2, 9);
    this.x = canvas.width + 200;
    this.speed = Math.random() * (2 - 1) + 1;
    this.width = 50 * (498 / 187);
    this.height = 50;
    this.y =
      Math.random() * (canvas.height - this.height - this.height) + this.height;
    this.image = images.find((image) => image.id == "torpedoBlack");
    this.flameNumber = 1;
    this.flame = images.find(
      (image) => image.id == "torpedoFlame" + this.flameNumber
    );
  }

  update() {
    this.x -= this.speed;
  }

  draw() {
    if (gameFrame % 20 === 0) {
      if (this.flameNumber === 4) {
        this.flameNumber = 1;
      }
      this.flame.src = `../assets/img/torpedo_flame_${this.flameNumber}.png`;
      this.flameNumber++;
    }
    ctx.setTransform(-1, 0, 0, 1, 0, 0);
    ctx.drawImage(this.flame, -this.x - 190, this.y + 13, 25 * (275 / 75), 25);
    ctx.setTransform(1,0,0,1,0,0);
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

export default Enemy;
