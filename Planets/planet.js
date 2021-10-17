class Planet {
    constructor(id, radius) {
        this.id = id;
        this.translation = [0,0,0];

        //values set in subclasses
        this.color = 0;
        this.scale = 0;
        this.speed = 0;

        this.xRadius = radius[0];
        this.yRadius = radius[1];
        this.zRadius = radius[2];
        this.phi = -90; //phi used for z translation, starts at -90 to ensure correct orientation
        this.theta = 0; //theta used for regular x/y translations

        this.starDist = width;
    }

    draw() {
        push();
            ambientLight(this.color[0], this.color[1], this.color[2]);
            translate(this.translation[0], this.translation[1], this.translation[2]);
            scale(this.scale, this.scale, this.scale);
            sphere();
        pop();
    }

    move() {
        // Convert polar to cartesian
        this.x = this.xRadius * cos(this.phi);
        this.y = this.yRadius * sin(this.phi);
        this.z = this.zRadius * cos(this.theta);

        this.translation[0] = this.x;
        this.translation[1] = this.y;
        this.translation[2] = this.z;

        this.theta += this.speed;
        this.phi += this.speed;
    }

    setOnlyPlanet() {
        mutePlanets();
        this.soundFile.setVolume(1, 0.2);
    }
}
