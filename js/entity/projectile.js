import { images } from "../handler/imagesHandler.js";
import { player } from "../handler/playerHandler.js";
import { ctx } from "../main.js";

class Projectile {
  constructor() {
    this.x = player.x + player.width - 10;
    this.y = player.y + player.height / 2;
    this.speed = 4;
    this.width = 50 * (160 / 71);
    this.height = 50;
    this.fireBall = images.find((image) => image.id == "fireball");
  }

  draw() {
    ctx.drawImage(this.fireBall, this.x, this.y, this.width, this.height);
  }

  update() {
    this.x += this.speed;
  }
}

export default Projectile;
