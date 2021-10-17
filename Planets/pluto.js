class Pluto extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius, soundFile);

        this.color = [217,245,255];
        this.scale = 0.081;
        this.speed = 0.02;
    }
}