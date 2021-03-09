import { ctx, canvas, gameFrame } from "../main.js";
import { images } from "../handler/imagesHandler.js";

class FlyingCoin {
  constructor() {
    this.x = canvas.width + 200;
    this.speed = Math.random() * (2 - 1) + 1;
    this.width = 50 * (498 / 187);
    this.height = 50;
    this.y =
      Math.random() * (canvas.height - this.height - this.height) + this.height;
    this.maxY = this.y - 5;
    this.minY = this.y + 5;
    this.goDown = true;
    this.goUp = false;
    this.image = images.find((image) => image.id == "bronzeCoin");
    this.frameWidth = 828 / 3;
    this.frameHeight = 1270 / 5;
    this.numRows = 5;
    this.numColumns = 3;
    this.rowIndex = 0;
    this.columnIndex = 0;
    this.rowLoop = [0, 1, 2, 3, 4];
    this.columnLoop = [0, 1, 2];
  }

  draw() {
    if (gameFrame % 15 === 0) {
      this.columnIndex++;
      if (this.columnIndex === 3) {
        this.rowIndex++;
        this.columnIndex = 0;
      }
      if (this.rowIndex === 5) {
        this.rowIndex = 0;
      }
    }
    ctx.drawImage(
      this.image,
      this.columnLoop[this.columnIndex] * this.frameWidth,
      this.rowLoop[this.rowIndex] * this.frameHeight,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      100 * (828 / 3 / (1270 / 5)),
      100
    );
  }

  update() {
    this.x -= this.speed;
    if (gameFrame % 15 === 0) {
      if (this.y > this.minY || this.y < this.maxY) {
        this.goDown = !this.goDown;
        this.goUp = !this.goUp;
      }
      if (this.goDown) {
        this.y += 1.5;
      }
      if (this.goUp) {
        this.y -= 1.5;
      }
    }
  }
}

export default FlyingCoin;
