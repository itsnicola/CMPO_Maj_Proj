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

  planets.push(new Sun('sun', [0, 0], soundFiles[0])); //sun does not have speed as it does not move
  planets.push(new Mercury('mercury', [x, y, -75], soundFiles[1]));
  x -= step;
  y += yStep;
  planets.push(new Venus('venus', [x, y, -75], soundFiles[2]));
  x -= step;
  y += yStep;
  planets.push(new Earth('earth', [x, y, -75], soundFiles[3]));
  x -= step;
  y += yStep;
  planets.push(new Mars('mars', [x, y, -75], soundFiles[4]));
  x -= step;
  y += yStep;
  planets.push(new Jupiter('jupiter', [x, y, -75], soundFiles[5]));
  x -= step;
  y += yStep;
  planets.push(new Saturn('saturn', [x, y, -75], soundFiles[6]));
  x -= step;
  y += yStep;
  planets.push(new Uranus('uranus', [x, y, -75], soundFiles[7]));
  x -= step;
  y += yStep;
  planets.push(new Neptune('neptune', [x, y, -75], soundFiles[8]));
  x -= step;
  y += yStep;
  planets.push(new Pluto('pluto', [x, y, -75], soundFiles[9]));
  console.log(y);

  star = new Star();

  angleMode(DEGREES); // this caused me so many issues. Note to self: do not remove!!
}

function draw() {
  background(0);

  planets[0].draw(); //draw the sun first

  //move and draw all the planets
  for (var i = planets.length - 1; i >= 0; i--) {
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
