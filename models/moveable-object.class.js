class MoveableObject {
  x = 100;
  y = 250;
  img;
  height = 400;
  width = 200;
  imageCache = {};
  currentImage = 0;

  loadImage(path) {
    this.img = new Image(); // Image ist ein bestehendes element in JavaScript. gleichzusetzen mit dem <img id="image"> + this.img = document.getElementById('image')
    this.img.src = path;
  }

  /**
   * 
   * @param {Array} arr - ['img/image1.png','img/image2.png','img/image3.png'] 
   */
  loadImages(arr) { // arr ist unser parameter in dem ein Array eingebunden ist (in der character.class)
    arr.forEach((path) => { // wir gehen jedes element (forEach) im array durch. path steht hier für den tatsächlichen bildpfad
      let img = new Image(); // Image ist ein bestehendes element in JavaScript. gleichzusetzen mit dem <img id="image"> + this.img = document.getElementById('image')
      img.src = path; // die img quelle ist der bildpfad des aktuellen bildes
      this.imageCache[path] = img; 
    });
  }

  moveRight() {
    console.log("Move Bitch");
  }

  moveLeft() {}
}
