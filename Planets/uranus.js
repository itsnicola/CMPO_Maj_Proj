class Uranus extends Planet {
    constructor(id) {
        super(id);
    }

    draw() {
        ambientLight(255, 175, 0);
        sphere();
    }
}