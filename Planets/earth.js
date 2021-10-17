class Earth extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius);
        this.soundFile = soundFile;
        this.soundFile.playMode('untilDone');
        this.soundFile.loop();

        this.muted = false;

        this.color = [1,253,250];
        this.scale = 0.4577;
        this.speed = 0.295;
    }

    playSound() {
        if (!this.muted) {
            let max = sqrt(pow(width / 2, 2) + pow(height / 2, 2));
            let amp = map(this.starDist, 0, max, 1, 0);
            //console.log(this.starDist, amp);
            this.soundFile.setVolume(amp);
            //this.soundFile.setVolume(0); //turn off for testing
        }

        if (this.starDist < 50 * this.scale) { //circle = 50x50
            this.setOnlyPlanet();
        } else {
            unmutePlanets();
        }
        
        if (!this.soundFile.isPlaying()) { 
            this.soundFile.play();
        }
     }
}