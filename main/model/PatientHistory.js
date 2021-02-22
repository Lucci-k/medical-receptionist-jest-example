/*
    Patienthistory class is used to modify and retrieve history in the system
*/

class PatientHistory {
    constructor() {
        this.treatments = [];
        this.medications = [];
        this.allergies = [];
    }

    addTreatment(treatment) {
		this.treatments.push(treatment);
	}

	addAllergy(allergy) {
		this.allergies.push(allergy);
	}

	addMedication(medication) {
		if(this.treatments != null){
			this.medications.push(medication);
		}
    }
    
	getAllAllergies() {
		return this.allergies;
	}

	getAllTreatments() {
		return this.treatments;
	}

	getAllMedications() {
		return this.medications;
	}
}

module.exports = PatientHistory;