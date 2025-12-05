import { ORIGINAL_URI_STORAGE_NAME } from '@okta/okta-auth-js'
import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import SignupPage from '../pages/signupPage.js'
import SignupFail from '../pages/signupFail.js'

const loginPage = new LoginPage ()
const signupPage = new SignupPage ()
const signupFail = new SignupFail ()

describe('projeto-rwa', () => {
  

  it('login-success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.userPassword)  
  cy.url().then((currentUrl) => {
    cy.log('URL após clique:', currentUrl)
  })
  cy.wait(3000)
  cy.url().then((currentUrl) => {
    cy.log('URL após 3 segundos:', currentUrl)
  })
  
})

  it('login-fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.userName, userData.userFail.userPassword) 
    cy.get('[data-test="signin-error"] div:nth-child(2)').should('have.class', 'css-1pxa9xg-MuiAlert-message');
    
  })


  it('signUp', () => {

    signupPage.accessLoginPage() 
    signupPage.createUser(userData.userSignup.firstName, userData.userSignup.lastName, 
      userData.userSignup.userName, userData.userSignup.userPassword, userData.userSignup.userPassword)
    loginPage.loginWithUser(userData.userSignup.userName, userData.userSignup.userPassword)
    cy.url().then((currentUrl) => {
    cy.log('URL após clique:', currentUrl)
  })
  cy.wait(3000)
  cy.url().then((currentUrl) => {
    cy.log('URL após 3 segundos:', currentUrl)
  })
  })

  //,userData.userSignup.userName,userData.userSignup.userPassword, userData.userSignup.userPassword

  it.only('SignUp fail', () => {

    signupPage.accessLoginPage()

    signupFail.testCase1(userData.userSignup.firstName, userData.userSignup.lastName, 
      userData.userSignup.userName, userData.userSignup.userPassword, userData.userSignup.confirmPassword)

    signupFail.clearAllFields()

    signupFail.errMsg()

    signupFail.testCase2(userData.userSignup.firstName,userData.userSignup.lastName, userData.userSignup.userName,
      userData.userSignup.userPassword, userData.userSignup.userWrongPass
    )

  })


  it('Sign Up-fail', () => {
  signupPage.accessLoginPage()  
  cy.get(selectorsList.signupButton).click()
  cy.url().should('include', '/signup')

  cy.log('Caso 1: Tentando registrar com formulário vazio')
  
  
  cy.log('Caso 2: Apenas primeiro nome preenchido')
  signupFail.createUser(userData.userSignup.firstName)
  cy.get(selectorsList.firstnameField).type(userData.userSignup.firstName)
  cy.get(selectorsList.firstnameField).clear()

 
  cy.log('Caso 3: Senhas não coincidem')
  cy.get(selectorsList.firstnameField).type(userData.userSignup.firstName)
  cy.get(selectorsList.lastnameField).type(userData.userSignup.lastName)
  cy.get(selectorsList.createUsernameField).type(userData.userSignup.userName)
  cy.get(selectorsList.createPasswordField).type(userData.userSignup.userPassword)
  cy.get(selectorsList.confirmPasswordField).type(userData.userSignup.userWrongPass)
  cy.contains('Password does not match').should('be.visible')
  
  cy.get(selectorsList.firstnameField).clear()
  cy.get(selectorsList.lastnameField).clear()
  cy.get(selectorsList.createUsernameField).clear()
  cy.get(selectorsList.createPasswordField).clear()
  cy.get(selectorsList.confirmPasswordField).clear()
})

it('Sign Up - Fail Scenarios (modular)', () => {
    signupFail.navigateToSignup()
    
    // Caso 1: Formulário vazio
    cy.log('Caso 1: Tentando registrar com formulário vazio')
    signupFail.clearForm()
    
    // Caso 2: Apenas primeiro nome
    cy.log('Caso 2: Apenas primeiro nome preenchido')
    signupFail.fillForm({ firstName: userData.userSignup.firstName })
    signupFail.clearForm()
    
    // Caso 3: Senhas não coincidem
    cy.log('Caso 3: Senhas não coincidem')
    signupFail.fillForm({
        firstName: userData.userSignup.firstName,
        lastName: userData.userSignup.lastName,
        username: userData.userSignup.userName,
        password: userData.userSignup.userPassword,
        confirmPassword: userData.userSignup.userWrongPass
    })
    signupFail.verifyPasswordError()
    signupFail.clearForm()
})



  
})