
import customCommandFillCardInfo from "../pageObjectModel/customCommandFillCardInfo"

Cypress.Commands.add('fillCreditCard', (cardHolderName,cardNumber,cardExpiryDate,cardCVV)=> {
    customCommandFillCardInfo(cardHolderName,cardNumber,cardExpiryDate,cardCVV)
})

