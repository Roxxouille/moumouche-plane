import { getBackgroundImages } from "./backgroundHandler.js";

const imagesToLoad = [
  {
    src: "background/farground_cloud_1.png",
    id: "farGroundCloud1",
  },
  {
    src: "background/farground_cloud_2.png",
    id: "farGroundCloud2",
  },
  {
    src: "background/farground_mountains.png",
    id: "farGroundMountains",
  },
  {
    src: "background/foreground_mountains.png",
    id: "foreGroundMountains",
  },
  {
    src: "background/mid_ground_cloud_1.png",
    id: "midGroundCloud1",
  },
  {
    src: "background/mid_ground_cloud_2.png",
    id: "midGroundCloud2",
  },
  {
    src: "plane_2_red.png",
    id: "player",
  },
  {
    src: "fire_ball_1.png",
    id: "fireball",
  },
  {
    src: "torpedo_black.png",
    id: "torpedoBlack",
  },
  {
    src: "torpedo_flame_1.png",
    id: "torpedoFlame1",
  },
  {
    src: "torpedo_flame_2.png",
    id: "torpedoFlame2",
  },
  {
    src: "torpedo_flame_3.png",
    id: "torpedoFlame3",
  },
  {
    src: "explosion_effect/spritesheet.png",
    id: "explosion",
  },
  {
    src: "flying_coin/bronze_coin_down.png",
    id: "bronzeCoin"
  }, 
];

const images = [];

let isImagesLoaded = false

const loadImages = (onComplete) => {
  let loaded = 0;

  const onLoad = () => {
    loaded++;
    if (loaded === imagesToLoad.length) {
      getBackgroundImages();
      isImagesLoaded = true;
      onComplete();
    }
  };

  for (let index = 0; index < imagesToLoad.length; index++) {
    const img = new Image();
    img.addEventListener("load", onLoad);
    img.src = "../assets/img/" + imagesToLoad[index].src;
    img.id = imagesToLoad[index].id;
    images.push(img);
  }
};

export { images, loadImages, isImagesLoaded };
