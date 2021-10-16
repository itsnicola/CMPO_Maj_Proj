class Earth extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius);
        this.soundFile = soundFile;
        this.soundFile.playMode('untilDone');
        this.soundFile.loop();

        this.color = [1,253,250];
        this.scale = 0.4577;
        this.speed = 0.295;
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