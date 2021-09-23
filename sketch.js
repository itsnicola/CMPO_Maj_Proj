let sun;

function setup() {
  createCanvas(1400, 700, WEBGL);
  noStroke();

  sun = new Sun(0);
}

function draw() {
  background(0);

  ambientLight(255, 0, 0);
  directionalLight(255, 255, 255);
  sphere();
}
