/*
    Patient class is used to create and retrieve patients in the system
*/

class Patient {
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
        return `Patient Name: ${this.name} ID: ${this.id}`
    }
}

module.exports = Patient;