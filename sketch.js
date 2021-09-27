let planets = [];

function setup() {
  createCanvas(1525, 750, WEBGL);
  noStroke();

  planets.push(new Sun('sun', [253,227,1], [0, 0], 1));
  planets.push(new Mercury('mercury', [255,204,0], [-75, 0], 0.25));
  planets.push(new Venus('venus', [123,234,186], [-125, 0], 0.4));
  planets.push(new Earth('earth', [1,253,250], [-185, 0], 0.5));
  planets.push(new Mars('mars', [202,92,53], [-250, 0], 0.375));
  planets.push(new Jupiter('jupiter', [255,160,67], [-325, 0], 0.8));
  planets.push(new Saturn('saturn', [249,210,147], [-425, 0], 0.7)); //TODO: saturn's rings
  planets.push(new Uranus('uranus', [24,230,255], [-525, 0], 0.55));
  planets.push(new Neptune('neptune', [69,185,255], [-600, 0], 0.45));
  planets.push(new Pluto('pluto', [217,245,255], [-650, 0], 0.2));

}

function draw() {
  background(0);
  //directionalLight(255, 255, 255);

  for (var i = 0; i < planets.length; i++) {
    planets[i].draw();
  }
}
