class HomePage{
    getCompleteWebFormLink(){
        return cy.get('div.jumbotron-fluid li a[href="/form"]')
     }
}
export default HomePage