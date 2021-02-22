/*
    Doctor class is used to create and retrieve doctors in the system
*/

class Doctor {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    toString() {
        return "Doctor Name: "+ this.name + " ID: "+ this.id;
    }
}

module.exports = Doctor;