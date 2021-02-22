import { canvas, ctx } from "../main.js";
import { images } from "../handler/imagesHandler.js";

class Enemy {
  constructor() {
    this.id = "_" + Math.random().toString(36).substr(2, 9);
    this.x = canvas.width + 200;
    this.y = Math.random() * canvas.height;
    this.speed = Math.random() * (2 - 1) + 1;
    this.width = 50 * (498 / 187);
    this.height = 50;
    this.image = images.find((image) => image.id == "torpedoBlack");
  }

  update() {
    this.x -= this.speed;
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

export default Enemy;
