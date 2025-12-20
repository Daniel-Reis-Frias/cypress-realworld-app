class TransactionHist {
    selectorsList() {
        const selectors = {
           
            myHistoricButton: "[data-test='nav-personal-tab']",
            logoutButton: "[data-test='sidenav-signout']",
            homeButton: "[data-test='sidenav-home']",
            accountNextButton: "[data-test='user-onboarding-next']",
            bankNameButton: "[name='bankName']",
            routingNumberNutton: "[placeholder='Routing Number']",
            accountNumber: "[name='accountNumber']",
            submitButton: "[data-test='bankaccount-submit']",
            doneButton: "[type='button']"
            
        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('/signin')
    }

    logOut(){
        cy.get(this.selectorsList().logoutButton).click()
    }

    crateAccount(){

        cy.get(this.selectorsList().accountNextButton).click()
        cy.get(this.selectorsList().bankNameButton).type('12345')
        cy.get(this.selectorsList().routingNumberNutton).type('123456789')
        cy.get(this.selectorsList().accountNumber).type('123456789')
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().doneButton).click()

    }

    selectHist() {
        cy.get(this.selectorsList().homeButton).click()
        cy.get(this.selectorsList().myHistoricButton).click()
    }

}

export default TransactionHist