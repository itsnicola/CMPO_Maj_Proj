class Planet {
    constructor(id, radius, soundFile) {
        this.id = id;
        this.translation = [0,0,0];
        this.soundFile = soundFile;
        this.soundFile.playMode('untilDone');
        
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

    //Generic method to play sound. Overriden where something else is done -- sun, earth, jupiter
    playSound() {
        this.soundFile.loop();
        let max = sqrt(pow(width / 2, 2) + pow(height / 2, 2));

        if (!this.muted) {
            let amp = map(this.starDist, 0, max, 0.9, 0);
            this.soundFile.setVolume(amp);
        }

        let playbackRate = map(this.starDist, 0.1, max, 1.5, 0);
        this.soundFile.rate(playbackRate);

        let panning = map(star.pos.x, -(width / 2), (width / 2), 1.0, -1.0);
        this.soundFile.pan(panning);
        
        if (!this.soundFile.isPlaying()) { 
            this.soundFile.play();
        }
    }
}
