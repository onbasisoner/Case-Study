class productPage {
    get productTitle(){
        return cy.get('h1.product_title.entry-title')
    }
    get addToCartButton(){
        return cy.get('button[name="add-to-cart"]')
    }
    get productAddedMessage(){
        return cy.get('.woocommerce-message')
    }
    get productAddedText(){
        return cy.get('div.woocommerce-message')
    }
    get basketButton(){
        return cy.get('.ql_cart-btn')
    }
}

export default new productPage()