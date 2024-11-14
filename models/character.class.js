class Character extends MoveableObject {

    speed = 5;

  IMAGES_WALKING = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];
  world;

  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);

    this.animate();
  }

  animate() {

    setInterval(() => {

        // hiermit bewegt sich unser character
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.x += this.speed
            this.otherDirection = false;
        }

        if (this.world.keyboard.LEFT && this.x > 0) {
            this.x -= this.speed
            this.otherDirection = true;
        }
        this.world.camera_x = - this.x + 100;
    }, 500 / 60);


    setInterval(() => {

        // mit dem || wird gesagt, entweder rechts oder links
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

        // hier wird das laufen animiert (ist aber noch an der selben x stelle fixiert)
        let i = this.currentImage % this.IMAGES_WALKING.length; // % funktioniert ähnlich wie ein loop in kombination mit xxx.length
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 50);
  }

  jump() {}
}
