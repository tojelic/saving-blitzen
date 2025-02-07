export const rockets = [
  {
    rocketId: 0,
    rocketX: 100, //potrebno je definirati u odnosu na canvas
    rocketY: 623, //potrebno je definirati u odnosu na canvas
    rocketIsFired: false,
    rocketIsFlying: false,
  },
  {
    rocketId: 1,
    rocketX: 100, //potrebno je definirati u odnosu na canvas
    rocketY: 623, //potrebno je definirati u odnosu na canvas
    rocketIsFired: false,
    rocketIsFlying: false,
  },
  {
    rocketId: 2,
    rocketX: 100, //potrebno je definirati u odnosu na canvas
    rocketY: 623, //potrebno je definirati u odnosu na canvas
    rocketIsFired: false,
    rocketIsFlying: false,
  },
];
export const santa = {
  santax: 223,
  santay: 514,
  health: 100,
  canShoot: true,
  santaspeed: 1,
  santaIsDead: false,
};
export const raindeer = {
  raindeerx: 2000,
  raindeery: 514,
};
export const bullet = {
  radius: 5,
  color: 'rgb(173, 216, 230)',
  speed: 50,
  isFired: false,
  bulletXpos: 1800 / 10 + 145, //mjesto pucanja iz puške
  bulletYpos: 0, //mjesto pucanja iz puške
  bulletYspeed: 0,
};
export class Wolf {
  constructor(isWolfFlying) {
    this.isWolfFlying = isWolfFlying;
    this.wolfId = Math.ceil(Math.random() * 1000000 + 1000000);
    if (!isWolfFlying) this.wolfx = 2500;
    if (!isWolfFlying)
      this.wolfy = (600 * 2) / 3 + Math.ceil(Math.random() * 200);
    if (isWolfFlying) this.wolfx = 300 + Math.ceil(Math.random() * 1000);
    if (isWolfFlying) this.wolfy = -100;
    if (isWolfFlying) this.isFalling = false;
    if (isWolfFlying) this.isDown = false;
    this.wolfHitSanta = false;
    if (!isWolfFlying) {
      this.wolfHeartXStart = this.wolfx + 50;
      this.wolfHeartXEnd = this.wolfx + 150;
      this.wolfHeartYStart = this.wolfy + 50;
      this.wolfHeartYEnd = this.wolfy + 200;
    }
    if (isWolfFlying) {
      this.wolfHeartXStart = this.wolfx - 150;
      this.wolfHeartXEnd = this.wolfx + 150;
      this.wolfHeartYStart = this.wolfy + 150;
      this.wolfHeartYEnd = this.wolfy - 150;
    }

    this.wolfIsFrozen = false;
    this.frozenPicNO = Math.ceil(Math.random() * 4) + 6; //Broj slike kad je smrznut
  }
  isShot(metak) {
    if (
      metak.bulletXpos > this.wolfHeartXStart &&
      metak.bulletXpos < this.wolfHeartXEnd &&
      metak.bulletYpos > this.wolfHeartYStart &&
      metak.bulletYpos < this.wolfHeartYEnd
    ) {
      metak.bulletXpos = 3000;
      return true;
    }
    return false;
  }
  //Check if wolf is hit by rocket
  isDowned(rocket) {
    /*console.log(rocket.rocketX + '>' + this.wolfHeartXStart);
    console.log(rocket.rocketX + '<' + this.wolfHeartXEnd);
    console.log(rocket.rocketY + '>' + this.wolfHeartYStart);
    console.log(rocket.rocketY + '<' + this.wolfHeartYEnd);
    console.log('-----------------------');*/
    if (
      rocket.rocketX > this.wolfHeartXStart &&
      rocket.rocketX < this.wolfHeartXEnd &&
      rocket.rocketY < this.wolfHeartYStart &&
      rocket.rocketY > this.wolfHeartYEnd
    ) {
      rocket.rocketX = 10000; //makni raketu daleko da izgleda kao da nestaje
      this.isFalling = true;
      return true;
    }
    return false;
  }
}
