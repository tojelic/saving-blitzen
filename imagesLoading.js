export function imagesDefinition() {
  const tile = new Image();
  tile.src = 'tile.png';
  //planine
  const planine = new Image();
  planine.src = 'neboplan.png';
  //polja
  const snowFields = new Image();
  snowFields.src = 'snowFields.png';
  //santa images upload to array
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
  //santa fight images
  const santaFightImages = [];
  for (let i = 1; i < 27; i++) {
    const santaFightImage = new Image();
    if (i < 10) {
      santaFightImage.src = 'fight/fight0' + i + '.png';
    } else {
      santaFightImage.src = 'fight/fight' + i + '.png';
    }

    santaFightImages.push(santaFightImage);
    console.log(santaFightImage);
  }
  //explosion images
  const explosionImages = [];
  for (let i = 1; i <= 25; i++) {
    const explosionImage = new Image();
    if (i < 10) {
      explosionImage.src = 'explosion/exsplosion0' + i + '.png';
    } else {
      explosionImage.src = 'explosion/exsplosion' + i + '.png';
    }

    explosionImages.push(explosionImage);
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

  const lastImage = new Image();
  lastImage.src = './lastPicture/lastpicture.png';
  console.log(lastImage);
  //story tale pictures
  console.log(explosionImages);
  const images = {
    planine: planine,
    tile: tile,
    snowFields: snowFields,
    santaImages: santaImages,
    smokeImages: smokeImages,
    lastImage: lastImage,
    backgroundItemsImages: backgroundItemsImages,
    wolfImages: wolfImages,
    flyingWolfImage: flyingWolfImage,
    raindeerImages: raindeerImages,
    fireworkImages: fireworkImages,
    sledImages: sledImages,
    rocketFlyImages: rocketFlyImages,
    rocketSteadyImages: rocketSteadyImages,
    santaFightImages: santaFightImages,
    explosionImages: explosionImages,
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
