class Earth extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius, soundFile);

        this.muted = false;

        this.color = [1,253,250];
        this.scale = 0.4577;
        this.speed = 0.295;
    }
}