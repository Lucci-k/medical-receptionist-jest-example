/*
    Tests for the Patient class
*/

// Import required modules
const { test, expect } = require('@jest/globals');
const Patient = require('../../main/model/Patient.js')

// Instantiate the Medication class to run test on
const mockPatient = new Patient();

test('Testing if mockPatient is instance of Patient class', () => {
    expect(mockPatient).toBeInstanceOf(Patient)
});
test('Testing setName method', () => {
    mockPatient.setName('Harley Quinn');
    expect(mockPatient.getName()).toBe('Harley Quinn')
});
test('Testing setId method', () => {
    mockPatient.setId('12345678');
    expect(mockPatient.getId()).toBe('12345678')
});
test('Testing toString method prints correct format', () => {
    expect(mockPatient.toString()).toBe('Patient Name: Harley Quinn ID: 12345678')
})