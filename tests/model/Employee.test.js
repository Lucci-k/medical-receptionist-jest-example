/*
    Tests for the Employee class
*/
const { test, expect } = require('@jest/globals');
const Employee = require('../../main/model/Employee');

// Instantiate the Employee class to run test on
const mockEmployee = new Employee();

test('Testing if employee is instance of Employee class', () => {
    expect(mockEmployee).toBeInstanceOf(Employee)
})

test('Testing Employee setName method functions correctly', () => {
    mockEmployee.setName('Miss Vickies')
    expect(mockEmployee.getName()).toBe('Miss Vickies');
});

test('Testing Employee setId method will change ID', () => {
    mockEmployee.setId('00000000')
    expect(mockEmployee.getId()).toBe('00000000')
});

test('Testing Employee setPassword method will change password', () => {
    mockEmployee.setPassword('secret')
    expect(mockEmployee.getPassword()).toBe('secret')
});
