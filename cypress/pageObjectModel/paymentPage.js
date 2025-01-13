class paymentPage {
    get paymentPageTitle(){
        return cy.get('h1.page-title')
    }
    get paymentSelectButton(){
        return cy.get('#payment_method_iyzico')
    }
    get goToPayButton(){
        return cy.get('#place_order')
    }

}

export default new paymentPage()