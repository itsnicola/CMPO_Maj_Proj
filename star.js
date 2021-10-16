class Star {
    constructor() {
        this.pos = createVector(mouseX, mouseY);
        this.history = [this.pos];
    }

    update() {
        this.pos.x = mouseX - (width / 2);
        this.pos.y = mouseY - (height / 2);
        this.history.push(this.pos);
        
        for (let i = 0; i < this.history.length; i++) {
          //calculate descreasing opacity for each trailing sphere
          let a = i * 10;
          //draw each of the trailing spheres at calculated opacity
          // push();
          //   ambientLight(255, 255, 255, a);
          //   let vec = this.history[i];
          //   //draw at 2D position translated for 3D origin at screen centre
          //   //circle(-(width / 2) + vec.x, -(height / 2) + vec.y, 24);
          //   translate(vec.x, vec.y);
          //   sphere();
          // pop();
          push();
          let vec = this.history[i];
          ambientLight(255, 255, 255);
          fill(255, 255, 255);
          circle(vec.x, vec.y, 50);
          pop();
        }
        
        //draw a trail of length 20
        if (this.history.length > 100) {
          this.history.splice(0, 1);
        }
        
        push();
            //translate to mouse position (calibrated to screen size)
            let mX = mouseX - (width / 2);
            let mY = mouseY - (height / 2);
            translate(mX, mY, mouseY); //z axis = proportional to mouseY

            //scale down
            var scaleFactor = 0.06;
            scale(scaleFactor, scaleFactor, scaleFactor);

            //set lights 
            noLights();
            //spotLight(mouseX, mouseY, 15, 15);
            fill(255, 255, 255);
            sphere();
        pop();
        
      }

    draw() {
        //draw star at mouse
        push();
            //translate to mouse position (calibrated to screen size)
            let mX = mouseX - (width / 2);
            let mY = mouseY - (height / 2);
            this.pos = createVector(mX, mY);
            translate(mX, mY); //z axis = proportional to mouseY

            //scale down
            var scaleFactor = 0.06;
            scale(scaleFactor, scaleFactor, scaleFactor);

            //set lights 
            noLights();
            //spotLight(mouseX, mouseY);
            fill(255, 255, 255);

            //draw sphere
            sphere();
        pop();
    }

    distanceTo(p) {
      let x = (this.pos.x - p.translation[0]);
      let y = (this.pos.y - p.translation[1]);
      let z = (mouseY - p.translation[2]);
      let euclDist = sqrt(pow(x, 2) + pow(y, 2)); //TODO: z coords?
      return euclDist;
    }
}