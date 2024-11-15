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
  walking_sound = new Audio('audio/step.mp3');

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
            this.walking_sound.play();
            this.walking_sound.playbackRate = this.speed / 1.5; // Passe die Geschwindigkeit an
        }

        if (this.world.keyboard.LEFT && this.x > 0) {
            this.x -= this.speed
            this.otherDirection = true;
            this.walking_sound.play();
            this.walking_sound.playbackRate = this.speed / 1.5; // Passe die Geschwindigkeit an
        }
        this.world.camera_x = - this.x + 100;
    }, 1000 / 60);


    setInterval(() => {

        // mit dem || wird gesagt, entweder rechts oder links
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 50);
  }

  jump() {}
}
