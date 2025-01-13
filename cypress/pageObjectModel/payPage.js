class payPage {
    get payPageTitle(){
        return cy.get('h1.page-title')
    }
    get cardHolderName(){
        return cy.get('#ccname')
    }
    get cardExpiryDate(){
        return cy.get('#ccexp')
    }
    get cardNumber(){
        return cy.get('#ccnumber')
    }
    get cardCVVCode(){
        return cy.get('#cccvc')
    }
    get payButton(){
        return cy.get('#iyz-payment-button')
    }
    get smsCode(){
        return cy.get('#smsCode')
    }
    get submitButton(){
        return cy.get('#submitBtn')
    }

}

export default new payPage()