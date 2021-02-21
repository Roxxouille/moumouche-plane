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
    src: "explosion_effect/spritesheet.png",
    id: "explosion",
  },
];
const imagesObjects = [];

const loadImages = (images, onComplete) => {
  let loaded = 0;

  const onLoad = () => {
    loaded++;
    if (loaded === images.length) {
      console.log(imagesObjects);
      isImagesLoaded = true;
      onComplete();
    }
  };

  for (let index = 0; index < images.length; index++) {
    const img = new Image();
    img.addEventListener("load", onLoad);
    img.src = "../assets/img/" + images[index].src;
    img.id = images[index].id;
    imagesObjects.push(img);
  }
};
