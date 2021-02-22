/*
    Class to add and retrieve doctors
*/

const Doctor = require('../model/Doctor');

class DoctorService {
    constructor() {
        this.doctors = [];
    }

    getReference() {
        return new DoctorService();
    }

    getAllDoctors() {
        return this.doctors;
    }

    addDoctor(name, id) {
        const createDoctor = !this.doctors.filter((doctor) => {
            doctor.getId() === id
        });
        if (createDoctor) {
            this.doctors.push(new Doctor(name, id));
        }
        return createDoctor;
    }
}

module.exports = DoctorService;
