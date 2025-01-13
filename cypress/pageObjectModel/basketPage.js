class basketPage {
    get basketPageTitle(){
        return cy.get('h1.page-title')
    }
    get goToPaymentButton(){
        return cy.get('a').contains('Ödeme sayfasına git')
    }
}

export default new basketPage()