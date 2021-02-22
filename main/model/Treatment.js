/*
    Treatment class is used to modify and retrieve Treatments in the system
*/

class Treatment {
    constructor(treatmentDate, diagnose, description) {
        this.treatmentDate = treatmentDate;
		this.diagnose = diagnose;
		this.description = description;
    }
    
    getTreatmentDate() {
		return this.treatmentDate;
	}
    
	setTreatmentDate(treatmentDate) {
		this.treatmentDate = treatmentDate;
	}

	getDiagnose() {
		return this.diagnose;
	}

	setDiagnose(diagnose) {
		this.diagnose = diagnose;
	}

	getDescription() {
		return this.description;
	}

	setDescription(description) {
		this.description = description;
    }
    
    toString() {
        return `Treatment: Date: ${this.treatmentDate} Diagnose: ${this.diagnose}`
    }
}

module.exports = Treatment;