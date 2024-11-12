class Cloud extends MoveableObject {
    y = 20;
    height = 400;
    width = 700; 
    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 200;
    }

}
