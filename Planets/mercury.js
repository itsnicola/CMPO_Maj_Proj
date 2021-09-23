class Mercury extends Planet {
    constructor(id) {
        super(id);
    }

    draw() {
        push();
            ambientLight(150);
            translate(-50, 50);
            scale(0.2, 0.2);
            sphere();
        pop();
    }
}