class Planet {
    constructor(id, color, translation, scale, speed) {
        this.id = id;
        this.color = color;
        this.translation = [0,0,0];
        this.scale = scale;
        this.speed = speed;
        console.log(id, color, translation, scale);
        this.xRadius = translation[0];
        this.yRadius = translation[1];
        this.zRadius = translation[2];
        this.phi = -90; //phi used for z translation, starts at -90 to ensure correct orientation
        this.theta = 0; //theta used for regular x/y translations
    }

    draw() {
        push();
            ambientLight(this.color[0], this.color[1], this.color[2]);
            translate(this.translation[0], this.translation[1], this.translation[2]);
            //translate(this.x, this.y);
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
}
