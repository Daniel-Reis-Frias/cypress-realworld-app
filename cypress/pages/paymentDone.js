class PaymentDone {
    selectorsList() {
        const selectors = {
           
            newTransactionButton: "[data-test='nav-top-new-transaction']",
            selectUser: "[data-test='user-list-item-GjWovtg2hr']",
            setAmount: "[placeholder='Amount']",
            setNote: "[placeholder='Add a note']",
            payButton: "[data-test='transaction-create-submit-payment']"
        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('/signin')
    }


    transferValue() {
        cy.get(this.selectorsList().newTransactionButton).click()
        cy.get(this.selectorsList().selectUser).click()
        cy.get(this.selectorsList().setAmount).type(10)
        cy.get(this.selectorsList().setNote).type("test")
        cy.get(this.selectorsList().payButton).click()
        cy.contains('Transaction Submitted!',  { timeout: 10000 }).should('be.visible')
    }

}

export default PaymentDone