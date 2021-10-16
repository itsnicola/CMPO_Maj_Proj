class Jupiter extends Planet {
    constructor(id, color, translation, scale, speed, soundFile) {
        super(id, color, translation, scale, speed);
        this.soundFile = soundFile;
        this.soundFile.playMode('untilDone');
        
        this.env = new p5.Env();
        this.env.setADSR(0.01, 0.9, 0.2, 0.9);
        this.env.setRange(1.2, 0);
    }

    playSound() {
        if (this.starDist < 300) {
            this.env.setInput(this.soundFile);
        }

        // if (this.starDist < 100 && !soundFile.isPlaying()) {
        //     this.soundFile.play();
        // }    
    }
}