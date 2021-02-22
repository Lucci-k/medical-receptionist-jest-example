/*
    Tests for the Medication class
*/

// Import required modules
const { test, expect } = require('@jest/globals');
const Medication = require('../../main/model/Medication')


// Instantiate the Medication class to run test on
const mockMedication = new Medication();

test('Testing if mockMedication is instance of Medication class', () => {
    expect(mockMedication).toBeInstanceOf(Medication)
});
test('Testing setName method', () => {
    mockMedication.setName('Motrin');
    expect(mockMedication.getName()).toBe('Motrin')
});
test('Testing setStartDate method', () => {
    mockMedication.setStartDate('20210115');
    expect(mockMedication.getStartDate()).toBe('20210115')
});
test('Testing setEndDate method', () => {
    mockMedication.setEndDate('20210120');
    expect(mockMedication.getEndDate()).toBe('20210120')
});
test('Testing setDose method', () => {
    mockMedication.setDose('800mg');
    expect(mockMedication.getDose()).toBe('800mg')
});
test('Testing toString method prints correct format', () => {
    expect(mockMedication.toString()).toBe('Medication: Motrin Start Date: 20210115 End Date: 20210120 Dose: 800mg')
})