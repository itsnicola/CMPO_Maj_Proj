let planets = [];

function setup() {
  createCanvas(1525, 750, WEBGL);
  noStroke();

  // values for scale calculated from https://www.exploratorium.edu/ronh/solar_system/ 
  // for scale, used a combination of sun = 5in & sun = 50in, whatever made sense
  // (this is because the planets are actually quite big, hard to map to a single screen)

  // values for speed scaled down from https://en.wikipedia.org/wiki/Orbital_speed 
  
  planets.push(new Sun('sun', [253,227,1], [0, 0], 1)); //sun does not have speed as it does not move
  planets.push(new Mercury('mercury', [240,180,0], [-117, 25, -75], 0.1747, 4.79));
  planets.push(new Venus('venus', [123,234,186], [-123, 50, -100], 0.4348, 3.5));
  planets.push(new Earth('earth', [1,253,250], [-144, 75, -200], 0.4577, 2.95));
  planets.push(new Mars('mars', [202,92,53], [-168, 125, -250], 0.2428, 2.41));
  planets.push(new Jupiter('jupiter', [255,160,67], [-232, 200, -325], 0.5136, 1.31));
  planets.push(new Saturn('saturn', [249,210,147], [-427, 250, -425], 0.4182, 0.97)); //TODO: saturn's rings
  planets.push(new Uranus('uranus', [24,230,255], [-859, 400, -525], 0.1686, 0.68));
  planets.push(new Neptune('neptune', [69,185,255], [-1347, 450, -600], 0.1632, 0.54));
  planets.push(new Pluto('pluto', [217,245,255], [-1770, 600, -650], 0.081, 0.2));

  angleMode(DEGREES); // this caused me so many issues. Note to self: do not remove!!
}

function draw() {
  background(0);
  //directionalLight(255, 255, 255);
  
  planets[0].draw(); //draw the sun first

  //move and draw all the planets
  for (var i = planets.length - 1; i > 0; i--) {
      planets[i].move();
      planets[i].draw();
  }
}
