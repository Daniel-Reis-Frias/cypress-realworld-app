class SignupPage {
    selectorsList() {
        const selectors = {
            signupButton: "[data-test='signup']",
            firstnameField: "[name='firstName']",
            lastnameField: "[name='lastName']",
            createUsernameField: "[name='username']",
            createPasswordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            signupSubmitButton: "[data-test='signup-submit']",
            
        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('/signin')
    }

    goToSignupPage() {
        cy.get(this.selectorsList().signupButton).click()
    }

    typeFirstName(value) {
        cy.get(this.selectorsList().firstnameField).type(value)
    }

    typeLastName(value) {
        cy.get(this.selectorsList().lastnameField).type(value)
    }

    typeUsername(value) {
        cy.get(this.selectorsList().createUsernameField).type(value)
    }

    typePassword(value) {
        cy.get(this.selectorsList().createPasswordField).type(value)
    }

    typeConfirmPassword(value) {
        cy.get(this.selectorsList().confirmPasswordField).type(value)
    }

    // ➕ ADICIONADO — submit isolado
    submitSignup() {
        cy.get(this.selectorsList().signupSubmitButton).click()
    }

    // ➕ ADICIONADO — limpar todos os campos
    clearAllFields() {
        cy.get(this.selectorsList().firstnameField).clear()
        cy.get(this.selectorsList().lastnameField).clear()
        cy.get(this.selectorsList().createUsernameField).clear()
        cy.get(this.selectorsList().createPasswordField).clear()
        cy.get(this.selectorsList().confirmPasswordField).clear()
    }

    // ➕ ADICIONADO — verificar URL
    checkUrlContains(path) {
        cy.url().should("include", path)
    }

    // ➕ ADICIONADO — verificar mensagem de erro
    checkErrorMessage(msg) {
        cy.contains(msg).should("be.visible")
    }


    createUser(firstname, lastname, username, password, confirmpassword) {
        cy.get(this.selectorsList().signupButton).click()
        cy.get(this.selectorsList().firstnameField).type(firstname)
        cy.get(this.selectorsList().lastnameField).type(lastname)
        cy.get(this.selectorsList().createUsernameField).type(username)
        cy.get(this.selectorsList().createPasswordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmpassword)
        cy.get(this.selectorsList().signupSubmitButton).click()
    }

}

export default SignupPage