class ThreeDConfirmationPage {
    get smsCode(){
        return cy.get('#smsCode')
    }
    get submitButton(){
        return cy.get('#submitBtn')
    }
}

export default new ThreeDConfirmationPage()