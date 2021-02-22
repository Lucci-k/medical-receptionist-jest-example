/*
    Medication class is used to set medication details for patients
*/

class Medication {
    constructor(name, startDate, endDate, dose) {
        this.name = name;
		this.startDate = startDate;
		this.endDate = endDate;
		this.dose = dose;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getStartDate() {
		return this.startDate;
	}

	setStartDate(startDate) {
		this.startDate = startDate;
	}

	getEndDate() {
		return this.endDate;
	}

	setEndDate( endDate) {
		this.endDate = endDate;
	}

	getDose() {
		return this.dose;
	}

	setDose(dose) {
		this.dose = dose;
	}

	toString() {
		return `Medication: ${this.name} Start Date: ${this.startDate} End Date: ${this.endDate} Dose: ${this.dose}`;
	}
}

module.exports = Medication;