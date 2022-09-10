class CompleteWebFormPage{
    getFirstNameTxtBox(){
       return cy.get('#first-name')
    }
    getLastNameTxtBox(){
        return cy.get('#last-name')
    }
    getJobTitleTxtBox(){
        return cy.get('#job-title')
    }
    getEducationRadiobtn(){
        return cy.get('#radio-button-1')
    }
    getSexRadiobtn(){
        return cy.get('#checkbox-2')
    }
    getYearsOfExperiance(){
        return cy.get('#select-menu')
    }
    getDatePicker(){
        return cy.get('#datepicker')
    }
    getSubmitbtn(){
        return cy.get('.btn')
    }
    getSuccessMsg(){
        return cy.get('.alert')
    }
}
export default CompleteWebFormPage