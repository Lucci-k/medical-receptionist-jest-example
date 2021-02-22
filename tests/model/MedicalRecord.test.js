/*
    Tests for the MedicalRecord class
*/

// Import required modules
const { test, expect } = require('@jest/globals');
const Allergy = require('../../main/model/Allergy');
const MedicalRecord = require('../../main/model/MedicalRecord');
const Medication = require('../../main/model/Medication');
const Patient = require('../../main/model/Patient.js');
const Treatment = require('../../main/model/Treatment');

// Instantiate the employee class with mock data to run test on

const mockPatient = new Patient('Inigo Montoya', '10101010');
const mockAllergy = new Allergy('Iodine');
const mockMedication = new Medication('Motrin', '20210120', '20210126', '12mg');
const mockTreatment = new Treatment('20210120', 'Joint pains', 'Mr. Montoya reports pain in left elbow.');
const mockMedicalRecord = new MedicalRecord(mockPatient);
// Add mock data to medical record
mockMedicalRecord.getHistory().addAllergy(mockAllergy);
mockMedicalRecord.getHistory().addMedication(mockMedication);
mockMedicalRecord.getHistory().addTreatment(mockTreatment);

test('Testing if mockMedicalRecord is instance of MedicalRecord class', () => {
    expect(mockMedicalRecord).toBeInstanceOf(MedicalRecord)
});
test('Testing to get patient through medical records', () => {
    expect(mockMedicalRecord.getPatient()).toBe(mockPatient);
});
test('Testing to get all data through medical records', () => {
    expect(mockMedicalRecord.getHistory().getAllAllergies()).toContain(mockAllergy);
    expect(mockMedicalRecord.getHistory().getAllMedications()).toContain(mockMedication);
    expect(mockMedicalRecord.getHistory().getAllTreatments()).toContain(mockTreatment);
});
