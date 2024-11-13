class MoveableObject {
    x = 100;
    y = 250;
    img;
    height = 400;
    width = 200;
    imageCache = [];

    loadImage(path) {
        this.img = new Image(); // Image ist ein bestehendes element in JavaScript. gleichzusetzen mit dem <img id="image"> + this.img = document.getElementById('image')
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
        let img = new Image();
        img.src = path;
        this.imageCache[path] = path;
    });
    } 

    moveRight() {
        console.log('Move Bitch');
    }


    moveLeft() {
        
    }
} 