class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[data-test='signin-password']",
            loginButton: "[data-test='signin-submit']",
        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('/signin')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

}

export default LoginPage