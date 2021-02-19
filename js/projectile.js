class Projectile {
  constructor() {
    this.x = player.x + player.width - 10;
    this.y = player.y + player.height/2;
    this.speed = 2;
    this.width = 50 * (160 / 71);
    this.height = 50;
    this.fireBall = imagesObjects.find(image => image.id == "fireball");
  }

  draw() {
    ctx.drawImage(this.fireBall, this.x, this.y, this.width, this.height);
  }

  update() {
    this.x += this.speed;
  }
}
