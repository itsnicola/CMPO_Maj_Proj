class Uranus extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius, soundFile);

        this.muted = false;

        this.color = [24,230,255];
        this.scale = 0.1686;
        this.speed = 0.068;
    }
}