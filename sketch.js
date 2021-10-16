let planets = [];
let star;
let soundFiles = [];

function preload() {
  soundFormats('mp3', 'wav');
  soundFiles.push(loadSound('assets/sun.wav')); //Sun
  soundFiles.push(loadSound('assets/mercury.mp3')); //Mercury
  soundFiles.push(loadSound('assets/venus.mp3')); //Venus
  soundFiles.push(loadSound('assets/earth.mp3')); //Earth
  soundFiles.push(loadSound('assets/mars.wav')); //Mars
  soundFiles.push(loadSound('assets/jupiter.mp3')); //Jupiter
  soundFiles.push(loadSound('assets/saturn.mp3')); //Saturn
  soundFiles.push(loadSound('assets/uranus.mp3')); //Uranus
  soundFiles.push(loadSound('assets/neptune.mp3')); //Neptune
  soundFiles.push(loadSound('assets/pluto.mp3')); //Pluto
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  noCursor();

  // values for scale calculated from https://www.exploratorium.edu/ronh/solar_system/ 
  // for scale, used a combination of sun = 5in & sun = 50in, whatever made sense
  // (this is because the planets are actually quite big, hard to map to a single screen)

  // values for speed scaled down from https://en.wikipedia.org/wiki/Orbital_speed 

  // start position depends on window height
  let startX = -117;
  let endX = height - 100;
  let intervals = 8;
  let step = (endX + startX) / intervals;
  let x = startX;

  let startY = 25;
  let endY = (height - 100) / 2;
  let yStep = (endY - startY) / intervals;
  let y = startY;

  planets.push(new Sun('sun', [253,227,1], [0, 0], 1, soundFiles[0])); //sun does not have speed as it does not move
  planets.push(new Mercury('mercury', [240,180,0], [x, y, -75], 0.1747, 4.79, soundFiles[1]));
  x -= step;
  y += yStep;
  planets.push(new Venus('venus', [123,234,186], [x, y, -75], 0.4348, 3.5, soundFiles[2]));
  x -= step;
  y += yStep;
  planets.push(new Earth('earth', [1,253,250], [x, y, -75], 0.4577, 2.95, soundFiles[3]));
  x -= step;
  y += yStep;
  planets.push(new Mars('mars', [202,92,53], [x, y, -75], 0.2428, 2.41, soundFiles[4]));
  x -= step;
  y += yStep;
  planets.push(new Jupiter('jupiter', [255,160,67], [x, y, -75], 0.5136, 1.31, soundFiles[5]));
  x -= step;
  y += yStep;
  planets.push(new Saturn('saturn', [249,210,147], [x, y, -75], 0.4182, 0.97, soundFiles[6]));
  x -= step;
  y += yStep;
  planets.push(new Uranus('uranus', [24,230,255], [x, y, -75], 0.1686, 0.68, soundFiles[7]));
  x -= step;
  y += yStep;
  planets.push(new Neptune('neptune', [69,185,255], [x, y, -75], 0.1632, 0.54, soundFiles[8]));
  x -= step;
  y += yStep;
  planets.push(new Pluto('pluto', [217,245,255], [x, y, -75], 0.081, 0.2, soundFiles[9]));
  console.log(y);

  star = new Star();

  angleMode(DEGREES); // this caused me so many issues. Note to self: do not remove!!
}

function draw() {
  background(0);

  planets[0].draw(); //draw the sun first

  //move and draw all the planets
  for (var i = planets.length - 1; i > 0; i--) {
      planets[i].move();
      planets[i].draw();
      //calculate distance to each planet
      planets[i].starDist = star.distanceTo(planets[i]);
  }

  star.draw();

  for (let i = 0; i < planets.length; i++) {
    planets[i].playSound();
  }
  //star.update();
}

function getY(offset) {
  return (height - offset) / 2;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
