import mainPage  from "../../pageObjectModel/mainPage";
import productPage from "../../pageObjectModel/productPage";
import basketPage from "../../pageObjectModel/basketPage";
import paymentPage from "../../pageObjectModel/paymentPage";
import customCommandFillCardInfo from "../../pageObjectModel/customCommandFillCardInfo";
import payPage from "../../pageObjectModel/payPage";
import ThreeDConfirmationPage from "../../pageObjectModel/ThreeDConfirmationPage";
import { slowCypressDown } from "cypress-slow-down";

//
slowCypressDown()
describe('Test Automation Case Study', () => {

    before(() => {
        Cypress.once('uncaught:exception', () => false)
        cy.fixture("cardData").as('cardInfos')
        cy.step('Go to main page')
        cy.visit("demo")
        cy.log(cy.title())
    });
    it('Add Product Case', () => {
        cy.step('Click second product')
        mainPage.secondProduct.should('be.visible').click()
        
        productPage.productTitle.should('have.text','Serenity Kadın Ayakkabı')
        cy.step('Add Product to Cart')
        productPage.addToCartButton.should('be.visible').click()
        productPage.productAddedMessage.should('be.visible')
        productPage.productAddedText.should('contain','sepetinize eklendi')
        cy.step('Go to Cart Page')
        productPage.basketButton.should('be.visible').click()

        basketPage.basketPageTitle.should('have.text','Sepet')
        cy.step('Go to Payment Page')
        basketPage.goToPaymentButton.should('be.visible').click()

        paymentPage.paymentPageTitle.should('have.text','Ödeme')
        cy.step('Choose Credit/Debit Card')
        paymentPage.paymentSelectButton.should('be.visible').click()
        cy.step('Go to Payment with Card Page')
        paymentPage.goToPayButton.should('be.visible').click()

        payPage.payPageTitle.should('have.text','Sipariş ödemesi')
        cy.step('Fill Credit Card Infos')
        cy.get('@cardInfos').then((data) =>{
            customCommandFillCardInfo.fillCardDetails(data.cardHolderName, data.cardNumber, data.cardExpiryDate, data.cardCVC)
        })
        cy.step('Click Pay with Card')
        payPage.payButton.should('be.visible').click()

        cy.step('Fill SMS Code')
        ThreeDConfirmationPage.smsCode.should('be.visible').type('283126')
        cy.step('Click SMS Code Submit Button')
        ThreeDConfirmationPage.submitButton.should('be.visible').click()

        cy.step('Verify "Order Completed" Text')
        cy.get('.page-title').invoke('text').then((text) => {
            expect(text).to.equal('Sipariş alındı');
            cy.log('Page title is: ' + text); 
        })
    
    });
});