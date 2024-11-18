class MoveableObject {
  x = 100;
  y = 250;
  img;
  height = 400;
  width = 200;
  imageCache = {};
  currentImage = 0;
  speed = 0.2;
  otherDirection = false;
  speedY = 0;
  acceleration = 3;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 500 / 25);
  }

  isAboveGround(){
    return this.y < 250; // assuming the ground is at y = 250
  }

  loadImage(path) {
    this.img = new Image(); // Image() ist ein bestehendes element in JavaScript. gleichzusetzen mit dem <img id="image"> + this.img = document.getElementById('image')
    this.img.src = path;
  }

  /**
   *
   * @param {Array} arr - ['img/image1.png','img/image2.png','img/image3.png']
   */
  loadImages(arr) {
    // arr ist unser parameter in dem ein Array eingebunden ist (in der character.class)
    arr.forEach((path) => {
      // wir gehen jedes element (forEach) im array durch. path steht hier für den tatsächlichen bildpfad
      let img = new Image(); // Image ist ein bestehendes element in JavaScript. gleichzusetzen mit dem <img id="image"> + this.img = document.getElementById('image')
      img.src = path; // die img quelle ist der bildpfad des aktuellen bildes
      this.imageCache[path] = img;
    });
  }

  playAnimation(images) {
    // hier wird das laufen animiert (ist aber noch an der selben x stelle fixiert)
    let i = this.currentImage % this.IMAGES_WALKING.length; // % funktioniert ähnlich wie ein loop in kombination mit xxx.length
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {

      this.x -= this.speed;
  }
}
