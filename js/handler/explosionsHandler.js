const explosions = [];

const handleExplosion = () => {
  explosions.forEach((explosion, explosionIndex) => {
    explosion.update();
    explosion.draw();

    if (explosion.currentFrame === 9) {
      setTimeout(() => {
        explosions.splice(explosionIndex, 1);
      }, 0);
    }
  });
};

export { explosions };
export default handleExplosion;
