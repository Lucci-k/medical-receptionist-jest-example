const MedicalRecord = require('../model/MedicalRecord');
const Patient = require('../model/Patient');

/*
    This class act as service for patients and thier records
*/

class MedicalRecordService {
    constructor() {
        this.patients = [];
        this.medicalRecords = [];
    }

    getReference() {
        return new MedicalRecordService();
    }

    addPatient(name, id) {
        const patientAdded = this.patients.filter((patient) => {
            if (patient.getId() === id) {
                return false;
            } else {
                return true;
            }
        });
        if (patientAdded) {
            const newPatient = new Patient(name, id);
            this.patients.push(newPatient);
            this.medicalRecords.push(new MedicalRecord(newPatient));
        }
        return patientAdded;
    }

    getMedicalRecord(patientId) {
        const results = this.medicalRecords.filter(record => {
            return record.patient.id === patientId
        })
        return results
    }

    getPatient(patientId) {
        const results = this.patients.filter(patient => {
            return patient.id === patientId
        })
        return results
    }

    getAllPatients() {
        return this.patients
    }

    getPatientsWithAllergies(allergyName) {
        const patients = this.getAllPatients();
        const patientsWithAllergies = patients.filter((patient) => {
            return this.getMedicalRecord(patient.id)[0].getHistory().getAllAllergies().filter((allergy => {
                return allergy.name === allergyName 
                })).length > 0
            
        })
        return patientsWithAllergies;
        
    }
}

module.exports = MedicalRecordService;