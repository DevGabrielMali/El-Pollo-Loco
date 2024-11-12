class Chicken extends MoveableObject {

    y = 550;
    height = 100;
    width = 100;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 600 + Math.random() * 500;
        // this.y = 570;
        // this.height = 100;
        // this.width = 100;   
    }

}