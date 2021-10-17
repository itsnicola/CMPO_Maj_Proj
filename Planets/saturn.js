class Saturn extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius, soundFile);

        this.muted = false;

        this.color = [249,210,147];
        this.scale = 0.4182;
        this.speed = 0.097;
    }
}