class Neptune extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius, soundFile);

        this.muted = false;

        this.color = [69,185,255];
        this.scale = 0.1632;
        this.speed = 0.054;
    }
}