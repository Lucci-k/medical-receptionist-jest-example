/*
    Tests for the Treatment class
*/

// Import required modules
const { test, expect } = require('@jest/globals');
const Treatment = require('../../main/model/Treatment')

// Instantiate the Medication class to run test on
const mockTreatment = new Treatment();

test('Testing if mockTreatment is instance of Treatment class', () => {
    expect(mockTreatment).toBeInstanceOf(Treatment)
});
test('Testing setTreatmentDate method', () => {
    mockTreatment.setTreatmentDate('20210115');
    expect(mockTreatment.getTreatmentDate()).toBe('20210115')
});
test('Testing setDiagnose method', () => {
    mockTreatment.setDiagnose('Back pain');
    expect(mockTreatment.getDiagnose()).toBe('Back pain')
});
test('Testing setDescription method', () => {
    mockTreatment.setDescription('Pain reported in lower back.');
    expect(mockTreatment.getDescription()).toBe('Pain reported in lower back.')
});
test('Testing toString method prints correct format', () => {
    expect(mockTreatment.toString()).toBe('Treatment: Date: 20210115 Diagnose: Back pain')
})