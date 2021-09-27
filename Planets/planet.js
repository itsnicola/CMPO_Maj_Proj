class Planet {
    constructor(id, color, translation, scale) {
        this.id = id;
        this.color = color;
        this.translation = translation;
        this.scale = scale;
        console.log(id, color, translation, scale);
    }

    draw() {
        push();
            ambientLight(this.color[0], this.color[1], this.color[2]);
            translate(this.translation[0], this.translation[1]);
            scale(this.scale, this.scale, this.scale);
            sphere();
        pop();
    }
}
