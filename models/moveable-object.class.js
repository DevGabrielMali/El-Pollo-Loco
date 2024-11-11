class MoveableObject {
    x = 120;
    y = 250;
    img;
    height = 300;
    width = 150;

    // constructor (xParam, yParam, imgParam) {
    //     this.x = xParam;
    //     this.y = yParam;
    //     this.img = imgParam;
    // }

    //loadImage('img/test.png);
    loadImage(path) {
        this.img = new Image(); // Image ist ein bestehendes element in JavaScript. gleichzusetzen mit dem <img id="image"> + this.img = document.getElementById('image')
        this.img.src = path;
    }

    moveRight() {
        console.log('Move Bitch');
    }


    moveLeft() {
        
    }
}