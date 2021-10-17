class Mars extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius, soundFile);

        this.muted = false;

        this.color = [202,92,53];
        this.scale = 0.2428;
        this.speed = 0.241;
    }
}