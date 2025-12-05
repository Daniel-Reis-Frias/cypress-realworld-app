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