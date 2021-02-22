/*
    Allergy class is used to provide allergies to patients records
*/

class Allergy {
    constructor(name="None") {
        this.name = name;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    toString() {
        return "Allergy " + this.name
    }
}

module.exports = Allergy;