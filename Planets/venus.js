class Venus extends Planet {
    constructor(id, radius, soundFile) {
        super(id, radius, soundFile);

        this.muted = false;

        this.color = [123,234,186];
        this.scale = 0.4348;
        this.speed = 0.35;
    }
}   