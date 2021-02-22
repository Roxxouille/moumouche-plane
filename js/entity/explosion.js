import { images } from "../handler/imagesHandler.js";
import {gameFrame, ctx} from "../main.js";

class Explosion {
  constructor(x, y) {
    this.id = "_" + Math.random().toString(36).substr(2, 9);
    this.x = x;
    this.y = y;
    this.frameWidth = 1786 / 3;
    this.frameHeight = 1536 / 3;
    this.numRows = 3;
    this.numColumns = 3;
    this.row = 0;
    this.column = 0;
    this.explosion = images.find((image) => image.id == "explosion");
    this.currentFrame = 0;
  }

  draw() {
    if (gameFrame % 15 === 0) {
      this.currentFrame++;
      if (this.currentFrame - 1 <= 2) {
        this.column = this.currentFrame - 1;
        this.row = 0;
      }
      if (this.currentFrame - 1 >= 3 && this.currentFrame - 1 <= 5) {
        this.row = 1;
        this.column =
          this.currentFrame == 3 ? 0 : this.currentFrame == 4 ? 1 : 2;
      }
      if (this.currentFrame - 1 >= 6) {
        this.row = 2;
        this.column =
          this.currentFrame == 6 ? 0 : this.currentFrame == 7 ? 1 : 2;
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
      100 * (1786 / 3 / (1536 / 3)),
      100
    );
  }

  update() {}
}

export default Explosion;