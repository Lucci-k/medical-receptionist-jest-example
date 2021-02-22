/*
    This Test Case is to test the DoctorService class
*/

const { test, expect } = require('@jest/globals');
const DoctorService = require('../../main/services/DoctorService');

// Instantiate the Doctor class to run test on
const doctorService = new DoctorService();

test('Testing add Doctor method', () => {
    doctorService.addDoctor('Dr. Suess', '01010101');
    expect(doctorService.getAllDoctors().filter((doctor => {
        doctor.getName() === 'Dr. Suess'
    })))
})
