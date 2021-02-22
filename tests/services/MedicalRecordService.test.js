/*
    This Test Case is to test the MedicalRecordService class
*/

const { test, expect } = require('@jest/globals');
const MedicalRecordService = require('../../main/services/MedicalRecordService');
const Allergy = require('../../main/model/Allergy');
const MedicalRecord = require('../../main/model/MedicalRecord');
const Patient = require('../../main/model/Patient')

// Instantiate the Doctor class to run test on
const medicalRecordService = new MedicalRecordService();

const allergy = new Allergy('Penicillian');

medicalRecordService.addPatient('The Joker', '00000001');
medicalRecordService.addPatient('Harley Quinn', '00000002');

test('Testing addPatient method', () => {
    expect(medicalRecordService.getAllPatients()).toContainEqual({"id": "00000001", "name": "The Joker"});
});

test('Testing getMedicalRecord Method', () => {
    expect(medicalRecordService.getMedicalRecord('00000001')).toContainEqual({
        patient: { name: 'The Joker', id: '00000001' },
        history: { treatments: [], medications: [], allergies: [] }
      });
});

test('Testing getPatient Method', () => {
    expect(medicalRecordService.getPatient('00000001')).toContainEqual({"id": "00000001", "name": "The Joker"});
});

test('Testing getAllPatients', () => {
    expect(medicalRecordService.getAllPatients()).toContainEqual({ name: 'The Joker', id: '00000001' }, { name: 'Harley Quinn', id: '00000002' });
});

test('Testing getAllPatientsWithAllergies', () => {
    
    medicalRecordService.getMedicalRecord('00000002')[0].getHistory().addAllergy(allergy);
    expect(medicalRecordService.getPatientsWithAllergies('Penicillian')).toContainEqual({ name: 'Harley Quinn', id: '00000002' });
});