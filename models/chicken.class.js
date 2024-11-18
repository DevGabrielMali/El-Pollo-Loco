class Chicken extends MoveableObject {

    y = 550;
    height = 100;
    width = 100;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 600 + Math.random() * 500;
        // this.y = 570;
        // this.height = 100;
        // this.width = 100; 
        this.speed = 1 + Math.random() * 1;  
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); // 60 Frames pro Sekunde (1000 = 1 sek)

        
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 50);

    }

}