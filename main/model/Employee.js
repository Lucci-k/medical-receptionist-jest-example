/*
    Employee class is used to create and retrieve employees in the system
*/

class Employee {
    constructor(name, id, password) {
        this.name = name;
        this.id = id;
        this.password = password;
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

    setPassword(password) {
        this.password = password;
    }

    getPassword() {
        return this.password;
    }
}

module.exports = Employee;