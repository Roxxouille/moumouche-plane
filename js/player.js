class Player {
  constructor() {
    this.x = 80;
    this.y = canvas.height / 2 - 100;
    this.flameNumber = 1;
    this.width = 100 * (1013 / 557);
    this.height = 100;
    this.flame = imagesObjects.find((image) => image.id == "torpedoFlame1");
    this.plane = imagesObjects.find((image) => image.id == "player");
  }

  update() {
    // Player moving up or down
    if (this.y >= 0 && this.y + this.height <= canvas.height) {
      if (down) {
        this.y += 3;
      }
      if (up) {
        this.y -= 3;
      }
    }

    if (this.y <= 0) {
      this.y = 1;
    }
    if (this.y + this.height >= canvas.height) {
      this.y = canvas.height - this.height - 1;
    }
  }

  draw() {
    // Each 20 frame, change the player flame's
    if (gameFrame % 20 === 0) {
      if (this.flameNumber === 4) {
        this.flameNumber = 1;
      }
      this.flame.src = `../assets/img/torpedo_flame_${this.flameNumber}.png`;
      this.flameNumber++;
    }
    ctx.drawImage(this.flame, this.x - 70, this.y + 52, 25 * (275 / 75), 25);
    ctx.drawImage(this.plane, this.x, this.y, this.width, this.height);
  }
}
