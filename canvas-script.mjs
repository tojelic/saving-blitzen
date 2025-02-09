import { imagesDefinition, imagesDefinition2 } from './imagesLoading.js';
import { santa, Wolf, bullet, raindeer, rockets } from './characters.js';
import { gameData } from './gameplay.js';

window.onload = function () {
  console.log(localStorage.getItem('pobjeda'));
  let mainMenuOn = !JSON.parse(localStorage.getItem('pobjeda')); //ovo vratiti u true
  let gameOn = false;
  let storyOn = false;
  let finalStory = JSON.parse(localStorage.getItem('pobjeda')); // ovo vratiti u false
  let pobjeda = false;
  let gubitak = false;
  let level = 1;
  let maxLevelNumber = localStorage.getItem('levelFinished');
  console.log(maxLevelNumber);
  if (maxLevelNumber == null) maxLevelNumber = 1;

  //Images loading
  const {
    planine,
    tile,
    lastImage,
    snowFields,
    santaImages,
    smokeImages,
    backgroundItemsImages,
    wolfImages,
    flyingWolfImage,
    raindeerImages,
    fireworkImages,
    sledImages,
    rocketFlyImages,
    rocketSteadyImages,
    santaFightImages,
    explosionImages,
  } = imagesDefinition();
  let stopAnimationLoop = false;

  freeBlitzen(); // Main game function
  function freeBlitzen() {
    //definitions
    console.log('37 37 37 ');
    console.log(level);
    var canvas = document.getElementById('Pattern');
    var context = canvas.getContext('2d');
    context.save();
    let backgroundImagesToDraw = []; //Declaration and initialization of background images array
    if (mainMenuOn) mainMenu();
    function mainMenu() {
      const gunnerSanta = new Image();
      gunnerSanta.src = 'SantaGunner.png';
      let startTextColor = 'red';
      //Drawing of the gunner santa in the main menu
      gunnerSanta.onload = function () {
        context.drawImage(
          gunnerSanta,
          0,
          100,
          1200,
          800,
          0,
          0,
          canvas.width,
          canvas.height
        );
        drawTitle();
        drawStoryButton();
        drawInstructions();
        drawStartText();
        drawLevels();

        //FillTextFunction
      };
      function drawLevels() {
        gameData.levels.forEach((level) => {
          if (maxLevelNumber >= level.levelId) {
            let height;
            let width;
            if (level.levelId <= 4) {
              width = canvas.width / 4;
              height =
                canvas.height / 2 + (canvas.height * level.levelId) / 8 - 50;
            }
            if (level.levelId >= 5 && level.levelId < 9) {
              width = (canvas.width * 3) / 4;
              height =
                canvas.height / 2 +
                (canvas.height * (level.levelId - 4)) / 8 -
                50;
            }
            if (level.levelId >= 9) {
              width = (canvas.width * 2) / 4;
              height = (canvas.height * 3) / 4;
            }
            level.levelButtonX = width;
            level.levelButtonY = height;
            const text = level.levelname;
            const cursiveFont = "'Cursive Font', cursive";
            context.textAlign = 'center';
            context.font = `normal 700 50px ${cursiveFont}`;
            context.shadowColor = 'black';
            context.shadowOffsetX = 5;
            context.shadowOffsetY = 5;
            context.shadowBlur = 4;
            context.fillStyle = level.textColor;
            context.strokeStyle = 'gold';
            context.fillText(text, width, height);
            context.lineWidth = 3;
            context.strokeText(text, width, height);
          }
        });
      }
      function drawTitle() {
        const text = 'SAVING BLITZEN';
        const cursiveFont = "'Cursive Font', cursive";
        context.textAlign = 'center';
        context.font = `normal 700 80px ${cursiveFont}`;
        context.shadowColor = 'black';
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        context.shadowBlur = 4;
        context.fillStyle = startTextColor;
        context.strokeStyle = 'gold';
        context.fillText(text, canvas.width / 2, canvas.height / 8);
        context.lineWidth = 3;
        context.strokeText(text, canvas.width / 2, canvas.height / 8);
      }
      //Function to draw story button
      function drawStoryButton() {
        const text = 'STORY';
        const cursiveFont = "'Cursive Font', cursive";
        context.textAlign = 'center';
        context.font = `normal 700 48px ${cursiveFont}`;
        context.shadowColor = 'black';
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        context.shadowBlur = 4;
        context.fillStyle = startTextColor;
        context.strokeStyle = 'gold';
        gameData.storyButton.storyButtonX = canvas.width / 2;
        gameData.storyButton.storyButtonY = (canvas.height * 2) / 8;
        context.fillText(
          text,
          gameData.storyButton.storyButtonX,
          gameData.storyButton.storyButtonY
        );
        context.lineWidth = 3;
        context.strokeText(
          text,
          gameData.storyButton.storyButtonX,
          gameData.storyButton.storyButtonY
        );
      }
      function drawInstructions() {
        const text = '(r,f,c)-fire, -> move right, e-fire rocket';
        const cursiveFont = "'Cursive Font', cursive";
        context.textAlign = 'center';
        context.font = `normal 700 48px ${cursiveFont}`;
        context.shadowColor = 'black';
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        context.shadowBlur = 4;
        context.fillStyle = startTextColor;
        context.strokeStyle = 'gold';
        context.fillText(text, canvas.width / 2, (canvas.height * 2) / 6);
        context.lineWidth = 3;
        context.strokeText(text, canvas.width / 2, (canvas.height * 2) / 6);
      }
      function drawStartText() {
        const text = '';
        const cursiveFont = "'Cursive Font', cursive";
        context.textAlign = 'center';
        context.font = `normal 700 60px ${cursiveFont}`;
        context.shadowColor = 'black';
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        context.shadowBlur = 4;
        context.fillStyle = startTextColor;
        context.strokeStyle = 'gold';
        context.fillText(text, canvas.width / 2, (canvas.height * 5) / 12);
        context.lineWidth = 3;
        context.strokeText(text, canvas.width / 2, (canvas.height * 5) / 12);
      }
      canvas.addEventListener('mousemove', handleMouseMove);
      function handleMouseMove(event) {
        const mouseX = event.clientX - canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - canvas.getBoundingClientRect().top;
        // console.log(`x=${mouseX} + y=${mouseY}`);
        if (mainMenuOn) {
          //HOOVER START
          if (
            mouseX > 820 &&
            mouseX < 980 &&
            mouseY > (canvas.height * 5) / 12 - 50 &&
            mouseY < (canvas.height * 5) / 12 + 20
          ) {
            startTextColor = 'gold';
            drawStartText();
          } else {
            startTextColor = 'red';
            drawStartText();
          }
          //HOOVER STORY BUTTON
          if (
            mouseX > gameData.storyButton.storyButtonX - 80 &&
            mouseX < gameData.storyButton.storyButtonX + 80 &&
            mouseY > gameData.storyButton.storyButtonY - 50 &&
            mouseY < gameData.storyButton.storyButtonY + 20
          ) {
            startTextColor = 'gold';
            drawStoryButton();
          } else {
            startTextColor = 'red';
            drawStoryButton();
          }
          gameData.levels.forEach((level) => {
            if (
              mouseX > level.levelButtonX - 150 &&
              mouseX < level.levelButtonX + 150 &&
              mouseY > level.levelButtonY - 50 &&
              mouseY < level.levelButtonY + 50
            ) {
              level.textColor = 'gold';
            } else {
              level.textColor = 'red';
            }
            drawLevels();
          });
        }
      }
      canvas.addEventListener('click', startClickChecker);
      function startClickChecker(event) {
        var rect = canvas.getBoundingClientRect();
        var mouseX = event.clientX - rect.left;
        var mouseY = event.clientY - rect.top;
        if (mainMenuOn) {
          if (mouseX > 820 && mouseX < 980 && mouseY > 340 && mouseY < 370) {
            gameOn = true;
            mainMenuOn = false;
            freeBlitzen();
          }
          if (
            mouseX > gameData.storyButton.storyButtonX - 80 &&
            mouseX < gameData.storyButton.storyButtonX + 80 &&
            mouseY > gameData.storyButton.storyButtonY - 50 &&
            mouseY < gameData.storyButton.storyButtonY + 20
          ) {
            storyOn = true; //Turning story on
            mainMenuOn = false; //Turning main manu of

            freeBlitzen(); //Restarting function
          }
          gameData.levels.forEach((levelItem) => {
            if (
              mouseX > levelItem.levelButtonX - 150 &&
              mouseX < levelItem.levelButtonX + 150 &&
              mouseY > levelItem.levelButtonY - 50 &&
              mouseY < levelItem.levelButtonY + 50
            ) {
              gameOn = true;
              mainMenuOn = false;
              level = levelItem.levelId;
              console.log('256 256 256 256');
              console.log(level);
              freeBlitzen();
            }
          });
        }
      }
    }
    let wolfs = [];
    if (gameOn) {
      //drawing of mountains
      planine.onload = function () {
        context.drawImage(
          planine,
          0,
          0,
          canvas.width,
          canvas.height,
          0,
          0,
          canvas.width,
          canvas.height
        );
      };
    }
    if (gameOn) game();
    function game() {
      let numberOfFiredRockets = 0;
      const radian = Math.PI / 180; //služi za zakretanje rakete
      let leftArrowKeyPressed = false;
      let rKeyPressed = false;
      let oneOfRocketsIsFlying = false;
      const cellWidth = 192;
      const cellHeight = 200;
      //crtanje sante
      function drawSanta(number) {
        //console.log(number);
        if (gubitak) return;
        context.drawImage(
          santaImages[number],
          0,
          0,
          934,
          641,
          canvas.width / 10,
          (canvas.height * 8) / 12,
          cellWidth,
          cellHeight
        );
      }
      //crtanje saonica
      function drawSled(number) {
        //console.log(number);
        context.drawImage(
          sledImages[number],
          0,
          0,
          934,
          641,
          canvas.width / 10 - cellWidth,
          (canvas.height * 9) / 12,
          cellWidth * 1.5,
          cellHeight * 1.5
        );
      }
      //crtanje mirne rakete
      function drawSteadyRocket(number) {
        //console.log(number);
        //context.restore();
        context.save();
        context.shadowBlur = 0;
        context.shadowColor = 'rgba(0, 0, 0, 0)';
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.translate(rockets[number].rocketX, rockets[number].rocketY);
        context.drawImage(
          rocketSteadyImages[number],
          -32, // Half of the image width
          -59, // Half of the image height
          64 / 2,
          119 / 2
        );
        context.restore();
      }

      //crtanje leteće rakete
      function drawFlyRocket(number, x) {
        //console.log(number);
        //context.restore();
        context.save();

        context.translate(rockets[number].rocketX, rockets[number].rocketY); //centar osi se seli u raketu
        context.rotate((Math.PI / 180) * x);
        context.drawImage(
          rocketFlyImages[number],
          -32, // Half of the image width
          -59, // Half of the image height
          64 / 2,
          119 / 2
        );
        context.restore();
        context.restore();
      }
      /*  canvas.width / 10 - cellWidth / 2,
          (canvas.height * 7) / 12, */
      //crtanje vatrometa
      function drawFirework(number) {
        context.drawImage(
          fireworkImages[number],
          0,
          0,
          346,
          328,
          canvas.width / 2,
          (canvas.height * 2) / 12,
          cellWidth * 2,
          cellHeight * 2
        );
        context.drawImage(
          fireworkImages[number],
          0,
          0,
          346,
          328,
          canvas.width / 4,
          (canvas.height * 2) / 12,
          cellWidth * 2,
          cellHeight * 2
        );
        context.drawImage(
          fireworkImages[number],
          0,
          0,
          346,
          328,
          (canvas.width * 3) / 4,
          (canvas.height * 2) / 12,
          cellWidth * 2,
          cellHeight * 2
        );
      }

      //crtanje eksplozije
      function drawExplosion(number, wolfx, wolfy) {
        const scaleFactor = 8; // Change this value to scale the image (0.5 = 50% smaller, 0.25 = 25% smaller)
        console.log(number);
        context.drawImage(
          explosionImages[number],
          0, // Source X (Keep 0 to take the whole image)
          0, // Source Y
          1020, // Full Source width
          1022, // Full Source height
          wolfx,
          wolfy,
          346 * scaleFactor, // Scaled destination width
          328 * scaleFactor // Scaled destination height
        );
      }

      //crtanje tučnjave
      function drawFight(number) {
        const scaleFactor = 1.5; // Change this value to scale the image (0.5 = 50% smaller, 0.25 = 25% smaller)

        context.drawImage(
          santaFightImages[number],
          0, // Source X (Keep 0 to take the whole image)
          0, // Source Y
          1020, // Full Source width
          1022, // Full Source height
          canvas.width / 80,
          (canvas.height * 5) / 10,
          346 * scaleFactor, // Scaled destination width
          328 * scaleFactor // Scaled destination height
        );
      }

      //crtanje vuka
      function drawWolf(number, x, y) {
        //console.log(number);
        //console.log(x);

        context.drawImage(
          wolfImages[number],
          0,
          0,
          701,
          356,
          x,
          y,
          (cellWidth * 3) / 4,
          (cellHeight * 3) / 4
        );
      }

      //crtanje Soba
      function drawRaindeer(number, x, y) {
        //console.log(number);
        //console.log(x);

        context.drawImage(
          raindeerImages[number],
          0,
          0,
          540,
          800,
          x,
          y,
          cellWidth,
          cellHeight
        );
      }
      //crtanje letećeg vuka
      function drawFlyingWolf(x, y) {
        //console.log(number);
        //console.log(x);
        context.drawImage(
          flyingWolfImage,
          0,
          0,
          764,
          1101,
          x,
          y,
          cellWidth * 1.5,
          cellHeight * 1.5
        );
      }
      function drawSmoke(number) {
        //console.log(number);
        context.drawImage(
          smokeImages[number],
          0,
          0,
          170,
          80,
          canvas.width / 10 + 120, //mjesto pucanja iz puške
          (canvas.height * 8) / 12 + 85, //mjesto pucanja iz puške
          170,
          80
        );
      }
      function drawBullet() {
        context.beginPath();

        context.strokeStyle = 'black';
        context.lineWidth = 1;
        context.fillStyle = bullet.color;
        context.arc(
          bullet.bulletXpos,
          bullet.bulletYpos,
          bullet.radius,
          0 * radian,
          360 * radian,
          false
        );

        if (bullet.isFired) {
          context.stroke();
          context.fill();
        }
      }
      function drawBackgroundItemsImages() {
        //console.log(number);
        backgroundImagesToDraw.forEach((element) => {
          context.drawImage(
            element.image,
            0,
            0,
            element.image.width,
            element.image.height,
            element.imageXPos,
            600 - element.image.height / 2,
            element.image.width / 2,
            element.image.height / 2
          );
          element.imageXPos =
            element.imageXPos - 2 * leftArrowKeyPressed * santa.santaspeed; //brzina crtanja pozadinskih slika
        });
      }
      window.requestAnimationFrame(animationLoop);
      let totalWolfNumber = 0;
      let killedWolfNumber = 0;
      let numberOfFlyWolfes = 0;
      let fireworkCounter = 0;
      let fireworkCounter2 = 0;
      let fightCounter = 0;
      let fightCounter2 = 0;
      let santaCounter = 0;
      let gunsmokeCounter = 0;
      let start = new Date();
      let snowfieldx = 0;

      //ANIMATION LOOP LOOP ANIMATION LOOP

      function animationLoop() {
        var now = new Date();
        snowfieldx = snowfieldx + 1 * leftArrowKeyPressed * santa.santaspeed;
        //Definiranje polja background imagesa

        if (snowfieldx % 500 == 0 && snowfieldx != 0) {
          let randomItemIndex = Math.floor(Math.random() * 5);
          let image = {
            image: backgroundItemsImages[randomItemIndex],
            imageXPos: canvas.width,
            imageYPos: 600,
          };
          backgroundImagesToDraw.push(image);
          //console.log(backgroundImagesToDraw);
          if (backgroundImagesToDraw.length > 6) backgroundImagesToDraw.shift(); //Ako je pomoćni niz veći od 5 briše se prvi član
        }

        //Snowfields begin
        if (snowfieldx >= 3347) {
          snowfieldx = 0;
        }

        if (now - start >= 20) {
          //Brzina svega

          //crtanje planina
          context.drawImage(
            planine,
            0,
            0,
            canvas.width,
            canvas.height,
            0,
            0,
            canvas.width,
            canvas.height
          );

          //crtanje vatrometa
          console.log(level);
          if (pobjeda) {
            fireworkCounter2 = fireworkCounter % 33;
            fireworkCounter = fireworkCounter + 1;
            drawFirework(fireworkCounter2); //Drawing firework
            if (fireworkCounter >= 250) {
              //When firework is finsihed

              if (level + 1 > maxLevelNumber) {
                localStorage.setItem('levelFinished', `${level + 1}`);
              }

              if (level === 9) {
                console.log('zadnja pobjeda');
                gameOn = false;
                finalStory = true;
                localStorage.setItem('pobjeda', true);
                setTimeout(() => {
                  location.reload();
                }, 0);
              }
              if (level < 9) {
                setTimeout(() => {
                  location.reload();
                }, 0); //set timeout služi ovdje da se forsa reload
              }
            }
          }

          //crtanje polja
          if (snowfieldx + canvas.width < 3347) {
            context.drawImage(
              snowFields,
              snowfieldx,
              0,
              canvas.width,
              canvas.height,
              0,
              0,
              canvas.width,
              (canvas.height * 3) / 2
            );
          }

          if (snowfieldx + canvas.width > 3347) {
            context.drawImage(
              snowFields,
              snowfieldx,
              0,
              3347 - snowfieldx,
              canvas.height,
              0,
              0,
              3348 - snowfieldx,
              (canvas.height * 3) / 2
            );
            context.drawImage(
              snowFields,
              0,
              0,
              snowfieldx + canvas.width - 3347,
              canvas.height,
              3347 - snowfieldx,
              0,
              canvas.width - 3347 + snowfieldx,
              (canvas.height * 3) / 2
            );
          }
          santaCounter %= 12;
          santaCounter = santaCounter + santa.santaspeed;

          //Kreiraj vukove
          //gameData.levels[0].maxWolfNumber ovo je broj valova vukova
          if (totalWolfNumber < gameData.levels[level - 1].maxWolfNumber + 5) {
            if (
              (Math.floor(snowfieldx) % 250 == 0 ||
                Math.floor(snowfieldx - 1) % 250 == 0) &&
              snowfieldx > 0
            ) {
              const startWolfNumber = Math.ceil(Math.random() * 2);
              for (let i = 0; i < startWolfNumber; i++) {
                const wolf = new Wolf(false);

                wolfs.push(wolf);
              }
              totalWolfNumber = totalWolfNumber + startWolfNumber;
            }
            //Ako se dođe na određenu poziciju krene dolaziti vuk iz padobrana
            //I ako je broj letećih vukova do sada manji od 3
            if (
              (Math.floor(snowfieldx) % 1000 == 0 ||
                Math.floor(snowfieldx - 1) % 1000 == 0) &&
              snowfieldx > 0 &&
              numberOfFlyWolfes < 3
            ) {
              const wolf = new Wolf(true);
              numberOfFlyWolfes++;
              //provjeri dali je vuk leteći

              totalWolfNumber++;
              wolfs.push(wolf);
            }
          }

          //nacrtati pozadinske slike
          drawBackgroundItemsImages();
          //draw wolf
          if (wolfs.length >= 0) {
            wolfs.forEach((wolf) => {
              if (wolf.wolfIsFrozen == false) {
                if (!wolf.isWolfFlying) {
                  wolf.wolfx = wolf.wolfx - 20;
                  wolf.wolfHeartXStart = wolf.wolfx + 50;
                  wolf.wolfHeartXEnd = wolf.wolfx + 150;
                  wolf.wolfY = wolf.wolfY + (santa.santay - wolf.wolfy) / 10;

                  drawWolf(
                    Math.floor(santaCounter / 2) % 6,
                    wolf.wolfx,
                    wolf.wolfy
                  );
                }
                if (wolf.isWolfFlying) {
                  wolf.wolfy = wolf.wolfy + 1;
                  wolf.wolfx =
                    wolf.wolfx -
                    (wolf.wolfx - santa.santax + (cellWidth * 1.5) / 2) / 100;
                  wolf.wolfHeartYStart = wolf.wolfy + 100;
                  wolf.wolfHeartYEnd = wolf.wolfy - 100;
                  wolf.wolfHeartXStart = wolf.wolfx - 100;
                  wolf.wolfHeartXEnd = wolf.wolfx + 100;
                  //wolf.wolfy = wolf.wolfy + (santa.santay - wolf.wolfy) / 10;
                  if (wolf.wolfIsFrozen == true) {
                    return;
                  } else {
                    drawFlyingWolf(wolf.wolfx, wolf.wolfy);
                  }
                }
              }
              if (wolf.wolfIsFrozen == true) {
                wolf.wolfx =
                  wolf.wolfx - 2 * leftArrowKeyPressed * santa.santaspeed;

                if (wolf.wolfx < santa.santax) return;
                if (wolf.isWolfFlying) {
                  //ako je vuk smrznut onda nećemo slikati
                  //Ovjde privremeno ubaciti fight
                  console.log(wolf.wolfExspolosionCounter);
                  let ExspolosionCounter = wolf.wolfExspolosionCounter % 25;
                  wolf.wolfExspolosionCounter = wolf.wolfExspolosionCounter + 1;
                  console.log(wolf.wolfExspolosionCounter);

                  if (wolf.wolfExspolosionCounter > 25) return;
                  drawExplosion(ExspolosionCounter, wolf.wolfx, wolf.wolfy);
                  return;
                } //Ovjde privremeno ubaciti fight
                drawWolf(wolf.frozenPicNO, wolf.wolfx, wolf.wolfy);
              }
            });
          }
          // Update santa
          if (leftArrowKeyPressed) {
            drawSanta(Math.floor(santaCounter));
          } else {
            drawSanta(1);
          }
          drawSled(0);
          //crtanje tučnjave ako je
          if (gubitak) {
            fightCounter2 = fightCounter % 26;
            fightCounter = fightCounter + 1;
            console.log(fightCounter);
            drawFight(fightCounter2); //Drawing firework
            if (fightCounter > 50) {
              console.log(fightCounter);
              setTimeout(() => {
                location.reload();
              }, 0); //set timeout služi ovdje da se forsa reload
            }
          }

          oneOfRocketsIsFlying = rockets.filter(
            (rocket) => rocket.rocketIsFlying == true
          ); //provjerava dali koja raketa leti i vraća onu koja leti
          //zvanje funkcije za crtanje rakete
          if (oneOfRocketsIsFlying.length > 0) {
            drawFlyRocket(oneOfRocketsIsFlying[0].rocketId, 1);
            rockets[oneOfRocketsIsFlying[0].rocketId].rocketY =
              rockets[oneOfRocketsIsFlying[0].rocketId].rocketY - 10;
            if (rockets[oneOfRocketsIsFlying[0].rocketId].rocketY < -30) {
              rockets[oneOfRocketsIsFlying[0].rocketId].rocketIsFlying = false;
            }
            const flyIngWolf = wolfs.filter(
              (wolf) => !wolf.wolfIsFrozen && wolf.isWolfFlying
            );
            //Provjerava ima li letećih vukova u trenutku pucanja
            if (flyIngWolf.length > 0) {
              //Ako ima korigira se X

              rockets[oneOfRocketsIsFlying[0].rocketId].rocketX =
                rockets[oneOfRocketsIsFlying[0].rocketId].rocketX +
                (flyIngWolf[0].wolfx +
                  (cellWidth * 1.5) / 2 -
                  rockets[oneOfRocketsIsFlying[0].rocketId].rocketX) /
                  50; //cellWidth * 1.5/2 je pola slike vuka
            }
          }

          if (oneOfRocketsIsFlying.length == 0 && numberOfFiredRockets < 3) {
            drawSteadyRocket(numberOfFiredRockets);
          }

          //fire smoke
          if (rKeyPressed) {
            drawSmoke(gunsmokeCounter + 1);
            gunsmokeCounter++;

            if (gunsmokeCounter == 3) {
              gunsmokeCounter = 0;
              rKeyPressed = false;
            }
          }
          //Provjer za svakog vuka dali je u tom trenutku pogođen
          let allWolfSFrozen = false;
          wolfs.forEach((wolf) => {
            if (!wolf.wolfIsFrozen) {
              wolf.wolfIsFrozen = wolf.isShot(bullet);
              if (wolf.wolfIsFrozen) {
                bullet.isFired = false;
                bullet.bulletXpos = 1800 / 10 + 145;
              }
            }

            //Check if wolf is hit ako vuk leti i ako raketa leti

            if (wolf.isWolfFlying && oneOfRocketsIsFlying.length > 0) {
              wolf.isExploading = wolf.isDowned(
                rockets[oneOfRocketsIsFlying[0].rocketId]
              );
              if (wolf.isExploading) {
                wolf.wolfIsFrozen = true;
              }
            }
          });
          //provjera jesu li svi vukovi smrznuti
          if (wolfs.filter((wolf) => wolf.isFrozen == false).length <= 0)
            allWolfSFrozen = true;
          //ako su svi vukovi smrznuti i broj valova vukaova tog levela je maksimum onda napiši pobjeda

          if (
            allWolfSFrozen &&
            totalWolfNumber >= gameData.levels[level - 1].maxWolfNumber
          ) {
            //
            //Samo za probu treba kasnije izbrisati
            //pomicanje raindera brzinom sante isto kao ko dvuka
            raindeer.raindeerx =
              raindeer.raindeerx - 2 * leftArrowKeyPressed * santa.santaspeed;
            //crtanje raindeera
            drawRaindeer(level - 1, raindeer.raindeerx, raindeer.raindeery);

            if (santa.santax > raindeer.raindeerx) {
              pobjeda = true;
            }
          }

          //Provjera jesu li svi vukovi zaleđeni
          if (bullet.isFired) {
            bullet.bulletYpos = bullet.bulletYpos + 1 * bullet.bulletYspeed;
            // (canvas.height * 8) / 12 + 130; //mjesto pucanja iz puške
            bullet.bulletXpos = bullet.bulletXpos + bullet.speed;

            drawBullet();
            if (bullet.bulletXpos > canvas.width) {
              //mjesto pucanja iz puške
              bullet.isFired = false;
              bullet.bulletXpos = 1800 / 10 + 145;
            }
          }

          start = now; // Reset the start time
        }
        //Snowfields end
        // animate
        wolfs.forEach((wolf) => {
          if (wolf.isWolfFlying) {
            if (wolf.wolfy > santa.santay - 200 && !wolf.wolfIsFrozen) {
              santa.santaIsDead = true;
              wolf.wolfIsFrozen = true;
            }
          }
          if (!wolf.isWolfFlying) {
            if (wolf.wolfx < santa.santax && !wolf.wolfIsFrozen) {
              santa.santaIsDead = true;
              wolf.wolfIsFrozen = true;
            }
          }
          if (santa.santaIsDead) {
            gubitak = true;
          }
        });
        if (!stopAnimationLoop) {
          window.requestAnimationFrame(animationLoop);
        }
      }

      window.requestAnimationFrame = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          }
        );
      })();

      // Function to get mouse coordinates
      function getMouseCoordinates(event) {
        // Get the mouse position relative to the canvas
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        // Display the coordinates
        console.log('X: ' + x + ', Y: ' + y);

        // You can use these coordinates for further processing or display
      }
      //EVENT LISTENERS
      // Add a click event listener to the canvas
      canvas.addEventListener('click', getMouseCoordinates);
      // Second Arc
      document.addEventListener('keydown', function (event) {
        // Check if the pressed key is the right arrow key
        if (event.key == 'ArrowRight') {
          // Your code to handle the right arrow key press goes here

          leftArrowKeyPressed = true;
          if (pobjeda) leftArrowKeyPressed = false; //ako smo pobjedili ne možemo ići više naprijed
        }
      });
      document.addEventListener('keydown', function (event) {
        // bullet fireing
        if (event.key == 'f' || event.key == 'r' || event.key == 'c') {
          // Your code to handle the right arrow key press goes here

          if (!bullet.isFired) rKeyPressed = true;
          if (bullet.isFired == false) {
            bullet.isFired = true;
            bullet.bulletYpos = (canvas.height * 8) / 12 + 130;
            if (event.key == 'r')
              bullet.bulletYspeed = -(Math.random() * 5 + 2.5);
            if (event.key == 'f') bullet.bulletYspeed = Math.random() * 5 - 2.5;
            if (event.key == 'c') bullet.bulletYspeed = Math.random() * 5 + 2.5;
          }
        }
        //lansiranje rakete
        if (event.key == 'e') {
          rockets[numberOfFiredRockets].rocketIsFired = true;
          rockets[numberOfFiredRockets].rocketIsFlying = true;
          numberOfFiredRockets++;
        }
      });
      document.addEventListener('keyup', function (event) {
        // Check if the released key is the right arrow key
        if (event.key === 'ArrowRight') {
          // Your code to handle the right arrow key release goes here
          console.log('Right arrow key released!');
          leftArrowKeyPressed = false;
        }
      });
    }
    //FIRST STORY FIRST STORY FIRST STORY BEGIN
    let storyTaleCounter = 0; //Counter for story scenes
    if (storyOn) story();
    function story() {
      //Upload pictures
      const storyTalePictures = imagesDefinition2();
      console.log(storyTalePictures);
      function drawStory() {
        //Draw Picture

        storyTalePictures[storyTaleCounter].onload = function () {
          context.drawImage(
            storyTalePictures[storyTaleCounter],
            0,
            50,
            640,
            540,
            0,
            0,
            canvas.width,
            canvas.height
          );
          (function writetext() {
            let i = 1;

            gameData.storyTale[storyTaleCounter].forEach((element) => {
              let yPosition = (canvas.height / 10) * i;
              const text = element;
              console.log(element);
              console.log(yPosition);
              const cursiveFont = "'Cursive Font', cursive";
              context.textAlign = 'center';
              context.font = `normal 700 50px ${cursiveFont}`;
              context.shadowColor = 'black';
              context.shadowOffsetX = 5;
              context.shadowOffsetY = 5;
              context.shadowBlur = 4;
              context.fillStyle = 'red';
              context.strokeStyle = 'gold';
              context.fillText(text, canvas.width / 2, yPosition);
              context.lineWidth = 3;
              context.strokeText(text, canvas.width / 2, yPosition);
              i++;
            });
          })();
        };

        //Draw text
      }

      drawStory();
    }
    document.addEventListener('keypress', function (event) {
      if (storyOn) {
        storyTaleCounter++;
        if (storyTaleCounter == 5) {
          mainMenuOn = true;
          storyOn = false;
          location.reload();
        }
      }

      // Check if the key pressed is the one you expect (e.g., the spacebar)
      if (storyOn) story();
    });
    //FIRST STORY FIRST STORY FIRST STORY END
    //FINAL STORY BEGIN
    if (finalStory) finalStoryFunction();
    function finalStoryFunction() {
      //Upload pictures
      console.log(lastImage);

      function drawLastStory() {
        //Draw Picture

        lastImage.onload = function () {
          context.drawImage(
            lastImage,
            0,
            0,
            1792,
            1024,
            0,
            0,
            canvas.width,
            canvas.height
          );
        };

        //Draw text
      }

      drawLastStory();
    }
    document.addEventListener('keypress', function (event) {
      if (finalStory) {
        localStorage.setItem('pobjeda', false);
        location.reload();
      }
    });
    document.addEventListener('click', function () {
      if (finalStory) {
        localStorage.setItem('pobjeda', false);
        location.reload();
      }
    });
    //FINAL STORY END
  }
};
