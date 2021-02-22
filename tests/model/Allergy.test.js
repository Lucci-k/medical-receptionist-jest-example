/*
    Tests for the Allergy class
*/
const { test, expect } = require('@jest/globals');
const Allergy = require('../../main/model/Allergy')

// Instantiate the Allergy class to run test on
const allergy = new Allergy();

test('Testing if allergy is instance of Allergy class', () => {
    expect(allergy).toBeInstanceOf(Allergy)
})

test('Testing Allergy default name is None', () => {
    expect(allergy.getName()).toBe("None");
});

test('Testing setName method will change allergy name', () => {
    allergy.setName('Penicillian')
    expect(allergy.getName()).toBe('Penicillian')
});

test('Testing toString provides correct format', () => {
    expect(allergy.toString()).toBe('Allergy Penicillian')
})