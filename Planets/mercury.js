class Mercury extends Planet {
    constructor(id, color, translation, scale, speed, soundFile) {
        super(id, color, translation, scale, speed);
        this.soundFile = soundFile;
        this.soundFile.playMode('untilDone');

    }

    playSound() {
        if (!this.soundFile.isPlaying()) { 
            this.soundFile.play();
        }
        this.soundFile.setVolume(map(this.starDist, 0, 200, 1, 0));
    }
}