/*
    MedicalRecord class is used to retrieve patients and patient history
*/

// import required modules
const PatientHistory = require('./PatientHistory')

class MedicalRecord {
    constructor(patient) {
        this.patient = patient;
        this.history = new PatientHistory
    }

    getPatient(patient) {
        return this.patient;
    }

    getHistory() {
        return this.history;
    }
}

module.exports = MedicalRecord;