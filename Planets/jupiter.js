class Jupiter extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius, soundFile);

        this.color = [255,160,67];
        this.scale = 0.5136;
        this.speed = 0.131;

        this.env = new p5.Env();
        this.env.setADSR(0.001, 0.1, 0.2, 0.1);
        this.env.setRange(1, 0);
        this.env.setInput(this.soundFile);
    }

    playSound() {
        this.soundFile.loop();

        let max = sqrt(pow(width / 2, 2) + pow(height / 2, 2));
        let amp = map(this.starDist, 0, max, 1, 0);

        this.env.scale(0, 1, amp, 0); //controls amplitude

        let rate = 0;
        if (this.starDist < 100) { rate = 4; }
        else if (this.starDist < 200) { rate = 10; }
        else if (this.starDist < 300) { rate = 20; }
        else if (this.starDist < 400) { rate = 30; }
        else { rate = 60; }

        if (frameCount % rate === 0) {
            this.env.play();
        }
    }
}