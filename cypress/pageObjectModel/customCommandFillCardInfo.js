import payPage from "./payPage"

class FillCardInfos {

    fillCardDetails(holderName,cardNumber,expiryDate,cvv){
        payPage.cardHolderName.type(holderName)
        payPage.cardNumber.type(cardNumber)
        payPage.cardExpiryDate.type(expiryDate)
        payPage.cardCVVCode.type(cvv)
    }
}

export default new FillCardInfos()