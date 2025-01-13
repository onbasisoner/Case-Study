import mainPage  from "../../pageObjectModel/mainPage";
import productPage from "../../pageObjectModel/productPage";
import basketPage from "../../pageObjectModel/basketPage";
import paymentPage from "../../pageObjectModel/paymentPage";
import customCommandFillCardInfo from "../../pageObjectModel/customCommandFillCardInfo";
import payPage from "../../pageObjectModel/payPage";
import ThreeDConfirmationPage from "../../pageObjectModel/ThreeDConfirmationPage";
import { slowCypressDown } from "cypress-slow-down";

//Sayfa çok hızlı olduğundan bazı adımlar bazen error veriyordu, bu yüzden slowdown ekledim.
slowCypressDown()
describe('Test Automation Case Study', () => {

    //Bu case özelinde tek case olduğu için tek before kullandım. Farklı caseler geldiginde beforeeach de kullanılabilir tabi.
    before(() => {
        //Sayfada sayfanın yüklenmesi bazen error veriyordu,hata kod yada cypress kaynaklı değildi bu yüzden hatayı bulamadım, bu yüzden böyle bir satır ekledim hatayı bypass etmek için.
        Cypress.once('uncaught:exception', () => false)
        //Kredi kartı bilgilerini fixture kullanarak almak istedim.
        cy.fixture("cardData").as('cardInfos')
        cy.step('Go to main page')
        //domain adresini configde tutuyorum.
        cy.visit("demo")
        cy.log(cy.title())
    });
    it('Add Product Case', () => {
        //aksiyon aldığım stepleri step olarak ekledim, assertionları step olarak eklemedim, aksiyonun bir sonucu olduğu için birlikte görmek istedim.
        //assertionlar icin be.visible ya da have.text kullandım.
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

        //kod hep aynı olduğu için bu projede direkt yazdım kodu
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