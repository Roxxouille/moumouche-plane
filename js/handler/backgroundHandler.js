import { canvas, ctx } from "../main.js";
import { images } from "./imagesHandler.js";

let backgrounds = [];

const getBackgroundImages = () => {
  const farGroundCloud1 = images.find((image) => image.id == "farGroundCloud1");
  const farGroundCloud2 = images.find((image) => image.id == "farGroundCloud2");
  const midGroundCloud1 = images.find((image) => image.id == "midGroundCloud1");
  const midGroundCloud2 = images.find((image) => image.id == "midGroundCloud2");
  const farGroundMountains = images.find(
    (image) => image.id == "farGroundMountains"
  );
  const foreGroundMountains = images.find(
    (image) => image.id == "foreGroundMountains"
  );
  backgrounds = [
    {
      id: farGroundCloud1,
      x1: 0,
      x2: farGroundCloud1.width,
      y: 10,
      width: farGroundCloud1.width,
      height: farGroundCloud1.height,
      speed: 0.1,
    },
    {
      id: farGroundCloud2,
      x1: 0,
      x2: farGroundCloud2.width,
      y: 150,
      width: farGroundCloud2.width,
      height: farGroundCloud2.height,
      speed: 0.1,
    },
    {
      id: midGroundCloud1,
      x1: 0,
      x2: midGroundCloud1.width,
      y: canvas.height - midGroundCloud1.height / 1.2,
      width: midGroundCloud1.width,
      height: midGroundCloud1.height,
      speed: 0.3,
    },
    {
      id: midGroundCloud2,
      x1: 0,
      x2: midGroundCloud2.width,
      y: canvas.height - midGroundCloud2.height,
      width: midGroundCloud2.width,
      height: midGroundCloud2.height,
      speed: 0.3,
    },
    {
      id: farGroundMountains,
      x1: 0,
      x2: farGroundMountains.width,
      y: canvas.height - farGroundMountains.height,
      width: farGroundMountains.width,
      height: farGroundMountains.height,
      speed: 0.7,
    },
    {
      id: foreGroundMountains,
      x1: 0,
      x2: foreGroundMountains.width,
      y: canvas.height - foreGroundMountains.height,
      width: foreGroundMountains.width,
      height: foreGroundMountains.height,
      speed: 0.75,
    },
  ];
};

const handleBackground = () => {
  ctx.fillStyle = "#1BD1FF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  backgrounds.forEach((background) => {
    background.x1 -= background.speed;
    if (background.x1 < -background.width) {
      background.x1 = background.width;
    }
    background.x2 -= background.speed;
    if (background.x2 < -background.width) {
      background.x2 = background.width;
    }

    ctx.drawImage(
      background.id,
      background.x1,
      background.y,
      background.width + 1,
      background.height
    );
    ctx.drawImage(
      background.id,
      background.x2,
      background.y,
      background.width + 1,
      background.height
    );
  });
};
export { getBackgroundImages };
export default handleBackground;
