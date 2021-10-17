class Sun extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius, soundFile);

        this.muted = false;

        this.color = [253,227,1];
        this.scale = 1;
    }

    draw() {
        pointLight(this.color[0] - 100, this.color[1] - 100, this.color[2], 0, 0, 0);
        push();
            specularColor(this.color[0], this.color[1], this.color[2]);
            pointLight(this.color[0], this.color[1], this.color[2], 0, 0, 400);
            emissiveMaterial(this.color[0], this.color[1], this.color[2]);
            translate(this.translation[0], this.translation[1]);
            scale(this.scale, this.scale, this.scale);
            sphere();
        pop();
    }

    move() {} //overrides move() function in Planet, so that sun does not move
}