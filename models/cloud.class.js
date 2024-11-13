class Cloud extends MoveableObject {
    y = 20;
    height = 400;
    width = 700; 
    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval( () => {
            this.x -= 0.2; // Bestimmt das Tempo der Wolken
        }, 1000 / 60); // 60 Frames pro Sekunde (1000 = 1 sek)

    }

}
