let planets = [];
let star;
let soundFiles = [];
let spawnedPlanets = ['sun'];
let font;

function preload() {
  soundFormats('mp3', 'wav');
  soundFiles.push(loadSound('assets/sun.wav')); //Sun
  soundFiles.push(loadSound('assets/mercury.mp3')); //Mercury
  soundFiles.push(loadSound('assets/venus.mp3')); //Venus
  soundFiles.push(loadSound('assets/earth.mp3')); //Earth
  soundFiles.push(loadSound('assets/mars.wav')); //Mars
  soundFiles.push(loadSound('assets/jupiter.mp3')); //Jupiter
  soundFiles.push(loadSound('assets/saturn.mp3')); //Saturn
  soundFiles.push(loadSound('assets/uranus.wav')); //Uranus
  soundFiles.push(loadSound('assets/neptune.mp3')); //Neptune
  soundFiles.push(loadSound('assets/pluto.mp3')); //Pluto

  font = loadFont('assets/LouisGeorgeCafe.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  noCursor();

  // values for scale calculated from https://www.exploratorium.edu/ronh/solar_system/ 
  // for scale, used a combination of sun = 5in & sun = 50in, whatever made sense
  // (this is because the planets are actually quite big, hard to map to a single screen)

  // values for speed scaled down from https://en.wikipedia.org/wiki/Orbital_speed 
  //[these values are in each Planet's class]

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

  textFont(font);
  textSize(20);
}

function draw() {
  background(0);

  planets[0].draw(); //draw the sun first

  //move and draw all the planets
  for (let i = 0; i < planets.length; i++) {
    if (spawnedPlanets.includes(planets[i].id)) {
      planets[i].move();
      planets[i].draw();
      //calculate distance to each planet
      planets[i].starDist = star.distanceTo(planets[i]);

      planets[i].playSound();
    }
  }

  //draw the star
  star.draw();

  //draw instructions
  fill(255);

  push();
    text("Press 'Enter' to spawn a planet", -(width / 2) + 50, (height / 2) - 75);
    text("Press 'Backspace' to despawn a planet", -(width / 2) + 50, (height / 2) - 50);
  pop();
}

//mute all the planets
function mutePlanets() {
  for (let i = 0; i < planets.length; i++) {
    planets[i].soundFile.setVolume(0, 0.2);
    planets[i].muted = true;
  }
}

function unmutePlanets() {
  for (let i = 0; i < planets.length; i++) {
    planets[i].muted = false;
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (spawnedPlanets.length < planets.length) { //if not all planets spawned
      console.log("pushing " + planets[spawnedPlanets.length].id);
      spawnedPlanets.push(planets[spawnedPlanets.length].id); //add next planet
    }
  } else if (keyCode === BACKSPACE) {
    if (spawnedPlanets.length > 1) { //if more than just the sun spawned
      console.log("removing" + planets[spawnedPlanets.length - 1].id);
      planets[spawnedPlanets.length - 1].soundFile.stop(); //stop playing sound
      spawnedPlanets.splice(spawnedPlanets.length - 1, 1); //remove from spawned array
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
