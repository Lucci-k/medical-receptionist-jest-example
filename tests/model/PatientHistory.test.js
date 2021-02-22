/*
    Tests for the PatientHistory class
*/

// Import required modules
const { test, expect } = require('@jest/globals');
const Allergy = require('../../main/model/Allergy');
const Medication = require('../../main/model/Medication');
const PatientHistory = require('../../main/model/PatientHistory');
const Treatment = require('../../main/model/Treatment');

// Instantiate the PatientHistory class with mock data to run test on
const mockPatientHistory = new PatientHistory();
const mockAllergy = new Allergy('Iodine');
const mockMedication = new Medication('Motrin', '20210120', '20210126', '12mg');
const mockTreatment = new Treatment('20210120', 'Joint pains', 'Mr. Montoya reports pain in left elbow.');
// Add mock data to medical record

test('Testing if mockPatientHistory is instance of PatientHistory class', () => {
    expect(mockPatientHistory).toBeInstanceOf(PatientHistory)
});
test('Testing addTreatment method', () => {
    mockPatientHistory.addTreatment(mockTreatment);
    expect(mockPatientHistory.getAllTreatments()).toContain(mockTreatment)
});
test('Testing addAllergy method', () => {
    mockPatientHistory.addAllergy(mockAllergy);
    expect(mockPatientHistory.getAllAllergies()).toContain(mockAllergy)
});
test('Testing addMedication method', () => {
    mockPatientHistory.addMedication(mockMedication);
    expect(mockPatientHistory.getAllMedications()).toContain(mockMedication)
});