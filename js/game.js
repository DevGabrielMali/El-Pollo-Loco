let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);

  console.log("My character is", world.character);
}


window.addEventListener("keydown", (event) => {
  if (event.key === 'w') {
    keyboard.UP = true;
  }

  if (event.key === 's') {
    keyboard.DOWN = true;
  }

  if (event.key === 'a') {
    keyboard.LEFT = true;
  }

  if (event.key === 'd') {
    keyboard.RIGHT = true;
  }

  if (event.key === ' ') {
    keyboard.SPACE = true;
  }
  
});

window.addEventListener("keyup", (event) => {
  if (event.key === 'w') {
    keyboard.UP = false;
  }

  if (event.key === 's') {
    keyboard.DOWN = false;
  }

  if (event.key === 'a') {
    keyboard.LEFT = false;
  }

  if (event.key === 'd') {
    keyboard.RIGHT = false;
  }

  if (event.key === ' ') {
    keyboard.SPACE = false;
  }
});