/*
    Tests for the Doctor class
*/
const { test, expect } = require('@jest/globals');
const Doctor = require('../../main/model/Doctor');

// Instantiate the Doctor class to run test on
const doctor = new Doctor();

test('Testing if doctor is instance of Doctor class', () => {
    expect(doctor).toBeInstanceOf(Doctor)
})

test('Testing Doctor setName method functions correctly', () => {
    doctor.setName('Dr.Who')
    expect(doctor.getName()).toBe('Dr.Who');
});

test('Testing Doctor setId method will change ID', () => {
    doctor.setId('00000000')
    expect(doctor.getId()).toBe('00000000')
});

test('Testing toString provides correct format', () => {
    expect(doctor.toString()).toBe('Doctor Name: Dr.Who ID: 00000000')
})