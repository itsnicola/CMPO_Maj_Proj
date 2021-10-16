class Neptune extends Planet {
    constructor(id, color, translation, scale, speed, soundFile) {
        super(id, color, translation, scale, speed);
        this.soundFile = soundFile;
    }

    playSound() {
        if (this.starDist < 100 && !this.playing) {
            this.soundFile.play();
            this.playing = true;
        }    }
}