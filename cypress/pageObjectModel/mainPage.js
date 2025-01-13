class mainPage {
    get secondProduct(){
        return cy.get('a[href="https://www.iyzico.com/demo/index.php/urun/serenity-kadin-ayakkabi/"]')
    }
}

export default new mainPage()