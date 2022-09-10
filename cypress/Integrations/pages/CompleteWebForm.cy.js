/// <reference types="cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import CompleteWebFormPage from '../../support/pageObjects/CompleteWebFormPage'
describe('Complete Web Form', () => {

    let data;
    before(() => {
       cy.fixture("example").then(function(data_){
       data = data_
       })
      })

    it('Complete Web Form test', () => {
        const homepage = new HomePage()
        const completeWebFormPage = new CompleteWebFormPage()
        cy.visit(Cypress.env('url'))
        homepage.getCompleteWebFormLink().click()
        completeWebFormPage.getFirstNameTxtBox().type(data.completeWebForm.Firstname)
        completeWebFormPage.getLastNameTxtBox().type(data.completeWebForm.Lastname)
        completeWebFormPage.getJobTitleTxtBox().type(data.completeWebForm.Jobtitle)
        completeWebFormPage.getEducationRadiobtn().check()
        completeWebFormPage.getSexRadiobtn().check()
        completeWebFormPage.getYearsOfExperiance().select(data.completeWebForm.experience)
        completeWebFormPage.getDatePicker().type(data.completeWebForm.Date)
        completeWebFormPage.getSubmitbtn().click()
        completeWebFormPage.getSuccessMsg().then(function(element){
            const actualtext = element.text()
            expect(actualtext.includes(data.completeWebForm.suceesmsg)).to.be.true
        })


    })
  })