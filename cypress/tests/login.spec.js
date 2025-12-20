import { ORIGINAL_URI_STORAGE_NAME } from '@okta/okta-auth-js'
import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import SignupPage from '../pages/signupPage.js'
import SignupFail from '../pages/signupFail.js'
import PaymentDone from '../pages/paymentDone.js'
import TransactionHist from '../pages/transactionHist.js'

const loginPage = new LoginPage ()
const signupPage = new SignupPage ()
const signupFail = new SignupFail ()
const paymentDone = new PaymentDone ()
const transactionHist = new TransactionHist ()

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


  it('SignUp fail', () => {

    signupPage.accessLoginPage()

    signupFail.testCase1(userData.userSignup.firstName, userData.userSignup.lastName, 
      userData.userSignup.userName, userData.userSignup.userPassword, userData.userSignup.confirmPassword)

    signupFail.clearAllFields()

    signupFail.errMsg()

    signupFail.testCase2(userData.userSignup.firstName,userData.userSignup.lastName, userData.userSignup.userName,
      userData.userSignup.userPassword, userData.userSignup.userWrongPass
    )

  })

  it('Transfer with money',() => {
    paymentDone.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.userPassword)  
    paymentDone.transferValue()


  })

  it.only('transaction historic', () => {

    transactionHist.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.userPassword)
    transactionHist.selectHist()
    paymentDone.transferValue()
    transactionHist.selectHist()
    transactionHist.logOut()
    signupPage.accessLoginPage() 
    signupPage.createUser(userData.userSignup.firstName, userData.userSignup.lastName, 
      userData.userSignup.userName, userData.userSignup.userPassword, userData.userSignup.userPassword)
    loginPage.loginWithUser(userData.userSignup.userName, userData.userSignup.userPassword)
    //transactionHist.crateAccount()  
    transactionHist.selectHist()

  })

  
})