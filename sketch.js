let planets = [];

function setup() {
  createCanvas(1400, 700, WEBGL);
  noStroke();

  planets.push(new Sun('sun'));
  planets.push(new Mercury('mercury'));
  planets.push(new Venus('venus'));
  planets.push(new Earth('earth'));
  planets.push(new Jupiter('jupiter'));
  planets.push(new Saturn('saturn'));
  planets.push(new Uranus('uranus'));
  planets.push(new Neptune('neptune'));
  planets.push(new Pluto('pluto'));

}

function draw() {
  background(0);
  directionalLight(255, 255, 255);

  for (var i = 0; i < planets.length; i++) {
    planets[i].draw();
  }
}
