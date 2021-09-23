class Sun extends Planet {
    constructor(id) {
        super(id);
    }

    draw() {
        push();
            ambientLight(255, 175, 0);
            sphere();
        pop();
    }
}