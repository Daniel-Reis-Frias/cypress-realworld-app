class SignupFail{
    selectorsList() {
        const selectors = {
            signupButton: "[data-test='signup']",
            firstnameField: "[name='firstName']",
            lastnameField: "[name='lastName']",
            createUsernameField: "[name='username']",
            createPasswordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",            
            signupSubmitButton: "[data-test='signup-submit']",
            errorMessageFirstName:"[id='firstName-helper-text']",
            errorMessageLastName: "[id='lastName-helper-text']",
            errorMessageUserName: "[id='username-helper-text']",
            errorMessagePass: "[id='password-helper-text']",
            errorMessageConfirmPass: "[id='confirmPassword-helper-text']"

        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('/signin')
    }

    clearAllFields() {
    cy.get(this.selectorsList().firstnameField).clear()
    cy.get(this.selectorsList().createUsernameField).clear()
    cy.get(this.selectorsList().createPasswordField).clear()
    cy.get(this.selectorsList().confirmPasswordField).clear()
    cy.get(this.selectorsList().lastnameField).clear()
    
    }


    testCase1(firstname, lastname, username, password, confirmpassword) {
       
        cy.get(this.selectorsList().signupButton).click()
        cy.get(this.selectorsList().firstnameField).type(firstname)
        cy.get(this.selectorsList().lastnameField).type(lastname)
        cy.get(this.selectorsList().createUsernameField).type(username)
        cy.get(this.selectorsList().createPasswordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmpassword)
        
    }
    

    errMsg(){

        cy.get(this.selectorsList().errorMessageFirstName).should('be.visible')
        .and('contain.text', 'First Name is required')

        cy.get(this.selectorsList().errorMessageLastName).should('be.visible')
        .and('contain.text', 'Last Name is required')

        cy.get(this.selectorsList().errorMessageUserName).should('be.visible')
        .and('contain.text', 'Username is required')
        
        cy.get(this.selectorsList().errorMessagePass).should('be.visible')
        .and('contain.text', 'Enter your password')

        cy.get(this.selectorsList().errorMessageConfirmPass).should('be.visible')
        .and('contain.text', 'Confirm your password')

    }

    testCase2(firstname,lastname,username,password,wrongpass){
        
        cy.get(this.selectorsList().firstnameField).type(firstname)
        cy.get(this.selectorsList().lastnameField).type(lastname)
        cy.get(this.selectorsList().createUsernameField).type(username)
        cy.get(this.selectorsList().createPasswordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(wrongpass)
        cy.get(this.selectorsList().errorMessageConfirmPass).should("be.visible")
        .and('contain.text','Password does not match')
    }
}

export default SignupFail