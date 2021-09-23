class Venus extends Planet {
    constructor(id) {
        super(id);
    }

    draw() {
        push();
            ambientLight(230, 70, 0);
            translate(-80, 80);
            scale(0.4, 0.4);
            sphere();
        pop();
    }
}