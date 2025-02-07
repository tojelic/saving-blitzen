export function imagesDefinition() {
  const tile = new Image();
  tile.src = 'tile.png';
  //planine
  const planine = new Image();
  planine.src = 'neboplan.png';
  //polja
  const snowFields = new Image();
  snowFields.src = 'snowFields.png';
  //santa images
  const santaImages = [];
  for (let i = 0; i < 13; i++) {
    const santaImage = new Image();
    let j = i + 1;
    santaImage.src = 'SantaWalk/Walk' + j + '.png';
    santaImages.push(santaImage);
  }
  //sledImages
  const sledImages = [];
  for (let i = 0; i < 4; i++) {
    const sledImage = new Image();

    sledImage.src = 'sled/sled' + i + '.png';
    sledImages.push(sledImage);
  }
  //rocketFlyImages
  const rocketFlyImages = [];
  for (let i = 0; i < 3; i++) {
    const rocketFlyImage = new Image();

    rocketFlyImage.src = 'Rocket/RocketFly' + i + '.png';
    rocketFlyImages.push(rocketFlyImage);
  }
  //rocketFlyImages
  const rocketSteadyImages = [];
  for (let i = 0; i < 3; i++) {
    const rocketSteadyImage = new Image();
    rocketSteadyImage.src = 'Rocket/Rocket' + i + '.png';
    rocketSteadyImages.push(rocketSteadyImage);
  }
  //santa images
  const wolfImages = [];
  for (let i = 0; i < 11; i++) {
    const wolfImage = new Image();
    let j = i + 1;
    wolfImage.src = 'runningWolf/wolf' + j + '.png';
    wolfImages.push(wolfImage);
    console.log(wolfImage);
  }
  //gun powder smoke images
  const smokeImages = [];
  for (let i = 0; i < 4; i++) {
    const smokeImage = new Image();
    let j = i + 1;
    smokeImage.src = 'gunSmoke/gunSmoke' + j + '.png';
    smokeImages.push(smokeImage);
  }

  //backgroundItemsImages
  const backgroundItemsImages = [];
  for (let i = 0; i < 5; i++) {
    const backgroundItemsImage = new Image();
    let j = i + 1;
    backgroundItemsImage.src = 'Drveca/BackgroundItem' + j + '.png';
    backgroundItemsImages.push(backgroundItemsImage);
  }

  //flyingWolfImage
  const flyingWolfImage = new Image();
  flyingWolfImage.src = 'flyingWolf/wolfParachute.png';

  //raindeerImages
  const raindeerImages = [];
  for (let i = 0; i < 9; i++) {
    const raindeerImage = new Image();
    let j = i + 1;
    raindeerImage.src = 'raindeerPictures/raindeerPicture' + j + '.png';
    raindeerImages.push(raindeerImage);
  }
  //backgroundItemsImages
  const fireworkImages = [];
  for (let i = 0; i < 34; i++) {
    const fireworkImage = new Image();
    let j = i + 1;
    fireworkImage.src = 'Fireworks/Firework' + j + '.png';
    fireworkImages.push(fireworkImage);
  }

  //story tale pictures

  const images = {
    planine: planine,
    tile: tile,
    snowFields: snowFields,
    santaImages: santaImages,
    smokeImages: smokeImages,
    backgroundItemsImages: backgroundItemsImages,
    wolfImages: wolfImages,
    flyingWolfImage: flyingWolfImage,
    raindeerImages: raindeerImages,
    fireworkImages: fireworkImages,
    sledImages: sledImages,
    rocketFlyImages: rocketFlyImages,
    rocketSteadyImages: rocketSteadyImages,
  };

  return images;
}

export function imagesDefinition2() {
  //planine
  const storyTalePictures = [];
  for (let i = 0; i < 5; i++) {
    const storyTalePicture = new Image();
    const imagePath = 'tale/tale' + i + '.png';
    storyTalePicture.src = imagePath;
    storyTalePictures.push(storyTalePicture);
  }
  return storyTalePictures;
}
