class Saturn extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius);
        this.soundFile = soundFile;
        this.soundFile.loop();
        this.soundFile.playMode('untilDone');

        this.color = [249,210,147];
        this.scale = 0.4182;
        this.speed = 0.097;
    }

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