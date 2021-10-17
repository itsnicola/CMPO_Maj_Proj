class Earth extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius, soundFile);

        this.muted = false;

        this.color = [1,253,250];
        this.scale = 0.4577;
        this.speed = 0.295;
    }

    //Prevents Earth's pitch from changing 
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