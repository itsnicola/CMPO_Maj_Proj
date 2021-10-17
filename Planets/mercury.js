class Mercury extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius, soundFile);

        this.muted = false;

        this.color = [240,180,0];
        this.scale = 0.1747;
        this.speed = 0.479;
    }
}