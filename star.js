class Star {
    constructor(img) {
        this.pos = createVector(mouseX, mouseY);
        this.img = img;
    }

    draw() {
        //draw star at mouse
        push();
        
            //translate to mouse position (calibrated to screen size)
            let mX = mouseX - (width / 2);
            let mY = mouseY - (height / 2);
            this.pos = createVector(mX, mY);
            translate(mX, mY, 100); //z axis = in front of all planets

            //set lights 
            noLights();

            image(this.img, 0, 0, 40, 40);
        pop();
    }

    //calculate euclidean distance to given planet
    distanceTo(p) {
      let x = (this.pos.x - p.translation[0]);
      let y = (this.pos.y - p.translation[1]);
      let euclDist = sqrt(pow(x, 2) + pow(y, 2));
      return euclDist;
    }
}