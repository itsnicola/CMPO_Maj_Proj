class Planet {
    constructor(id) {
        this.id = id;
    }
}

class Sun extends Planet {
    constructor(id) {
        super(id);
    }

    test() {
        console.log(this.id);
    }
}