class Earth extends Planet {
    constructor(id) {
        super(id);
    }

    draw() {
        push();
            ambientLight(0, 70, 255);
            translate(-100, 50);
            scale(0.5, 0.5);
            sphere();
        pop();
    }
}