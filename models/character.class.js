class Character extends MoveableObject {
  speed = 5;
  y = 100;
  IMAGES_WALKING = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];

  IMAGES_JUMPING = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];

  // IMAGES_HURT = [
  //   'img/2_character_pepe/4_hurt/H-41.png',
  //   'img/2_character_pepe/4_hurt/H-42.png',
  //   'img/2_character_pepe/4_hurt/H-43.png'
  // ]
  world;
  walking_sound = new Audio("audio/step.mp3");

  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      // hiermit bewegt sich unser character
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.otherDirection = false;
       this.moveRight();
       this.walking_sound.play();
       this.walking_sound.playbackRate = this.speed / 1.5; // Passe die Geschwindigkeit an
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.otherDirection = true; // Bestimmt das Tempo
        this.moveLeft();
        this.walking_sound.play();
        this.walking_sound.playbackRate = this.speed / 1.5; // Passe die Geschwindigkeit an
      }

      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60); 



    setInterval(() => {
      if (this.isAboveGround()) { // wenn der character nicht auf dem Boden ist
        this.playAnimation(this.IMAGES_JUMPING); // springt
      } else { 
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // wenn der character sich bewegt.
        this.playAnimation(this.IMAGES_WALKING); // geht
      }}
    }, 25);
  }

  jump() {
    this.speedY = 35;
  }
}
