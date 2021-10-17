class Pluto extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius, soundFile);

        this.color = [217,245,255];
        this.scale = 0.081;
        this.speed = 0.02;
    }

    playSound() {
        this.soundFile.loop();
        let max = sqrt(pow(width / 2, 2) + pow(height / 2, 2));

        if (!this.muted) {
            let amp = map(this.starDist, 0, max, 0.5, 0);
            //console.log(this.starDist, amp);
            this.soundFile.setVolume(amp);
            //this.soundFile.setVolume(0); //turn off for testing
        }

        // if (this.starDist < 50 * this.scale) { //circle = 50x50
        //     this.setOnlyPlanet();
        // } else {
        //     unmutePlanets();
        // }

        let panning = map(star.pos.x, -(width / 2), (width / 2), 1.0, -1.0);
        this.soundFile.pan(panning);

        //change rate + pitch
        let playbackRate = map(this.starDist, 0.1, max, 1.5, 0);
        this.soundFile.rate(playbackRate);

        if (!this.soundFile.isPlaying()) { 
            this.soundFile.play();
        }
    }
}