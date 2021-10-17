class Sun extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius, soundFile);

        this.muted = false;

        this.color = [253,227,1];
        this.scale = 1;
    }

    //overrides draw method - sun emits light
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

    //Prevents suns pitch from changing
    playSound() {
        this.soundFile.loop();
        let max = sqrt(pow(width / 2, 2) + pow(height / 2, 2));

        if (!this.muted) {
            let amp = map(this.starDist, 0, max, 0.9, 0);
            this.soundFile.setVolume(amp);
        }

        let panning = map(star.pos.x, -(width / 2), (width / 2), 1.0, -1.0);
        this.soundFile.pan(panning);
        
        if (!this.soundFile.isPlaying()) { 
            this.soundFile.play();
        }
    }
}