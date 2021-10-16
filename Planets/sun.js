class Sun extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius);
        this.soundFile = soundFile;
        this.soundFile.playMode('untilDone');
        this.soundFile.loop();

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

    playSound() {
        let max = sqrt(pow(width / 2, 2) + pow(height / 2, 2));
        let amp = map(this.starDist, 0, max, 1, 0);
        //console.log(this.starDist, amp);
        this.soundFile.setVolume(amp);
        
        if (!this.soundFile.isPlaying()) { 
            this.soundFile.play();
        }
    }
}