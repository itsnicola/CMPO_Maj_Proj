class Jupiter extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius);
        this.soundFile = soundFile;
        this.soundFile.playMode('untilDone');
        this.soundFile.loop();

        this.color = [255,160,67];
        this.scale = 0.5136;
        this.speed = 0.131;

        this.env = new p5.Env();
        this.env.setADSR(0.001, 0.1, 0.2, 0.1);
        this.env.setRange(1, 0);
        this.env.setInput(this.soundFile);

        this.rate = 20;
    }

    playSound() {
        //console.log(this.starDist);
        let max = sqrt(pow(width / 2, 2) + pow(height / 2, 2));
        let amp = map(this.starDist, 0, max, 1, 0);
        //console.log(this.starDist, amp);
        this.soundFile.setVolume(amp);
        this.env.scale(0, 1, amp, 0); //TODO: control amp value of env

        this.rate = map(this.starDist, 0, max, 0, 30);
        this.rate = floor(this.rate);
        if (frameCount % this.rate === 0) {
            this.env.play();
        }
    }
}