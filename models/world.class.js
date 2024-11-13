class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];

  clouds = [new Cloud()];

  backgroundObjects = [
    new BackgroundObject("img/5_background/layers/air.png", 0),
    new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
  ];

  canvas;
  ctx;
  keyboard;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjectsToMap(this.backgroundObjects); // Reihenfolge der Hintergründe bzw was auf welcher Ebene angezeigt wird, wird hier sortiert/geregelt
    this.addToMap(this.character);
    this.addObjectsToMap(this.clouds);
    this.addObjectsToMap(this.enemies);

    self = this; // von hier an kennt unser Programm den begriff "this" nicht mehr. Also müssen wir das "this" als "self" speichern, damit wir drauf zugreifen können.

    // Draw() wird mir requestAnimationFrame immer wieder aufgerufen, so oft unsere Grafikkarte das kann. Es ist also immer limitiert und nicht unbegrenzt und beugt so abstürzen vor.

    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
