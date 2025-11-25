describe('projeto-rwa', () => {
  
  it.only('login-success', () => {
  cy.visit('http://localhost:3000/signin')
  cy.get('[name="username"]').type('Judah_Dietrich50')
  cy.get('[data-test="signin-password"]').type('s3cret')
  cy.get('[data-test="signin-submit"]').click()
  cy.url().then((currentUrl) => {
    cy.log('URL após clique:', currentUrl)
  })
  cy.wait(3000)
  cy.url().then((currentUrl) => {
    cy.log('URL após 3 segundos:', currentUrl)
  })
  
})

  it('login-fail', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[name="username"]').type('wrong_name')
    cy.get('[data-test="signin-password"]').type('wrong_password')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="signin-error"] div:nth-child(2)').should('have.class', 'css-1pxa9xg-MuiAlert-message');
    
  })


  it('signUp', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.url().should('include', '/signup')
    cy.get('[name="firstName"]').type('Daniel')
    cy.get('[name="lastName"]').type('Reis')
    cy.get('[name="username"]').type('tester_123')
    cy.get('[name="password"]').type('123456')
    cy.get('[name="confirmPassword"]').type('123456')
    cy.get('[data-test="signup-submit"]').click()
    cy.get('[name="username"]').type('tester_123')
    cy.get('[data-test="signin-password"]').type('123456')
    cy.get('[data-test="signin-submit"]').click()
    cy.url().then((currentUrl) => {
    cy.log('URL após clique:', currentUrl)
  })
  cy.wait(3000)
  cy.url().then((currentUrl) => {
    cy.log('URL após 3 segundos:', currentUrl)
  })
  })


  it('Sign Up-fail', () => {
  cy.visit('http://localhost:3000/signin')
  cy.get('[data-test="signup"]').click()
  cy.url().should('include', '/signup')

  cy.log('Caso 1: Tentando registrar com formulário vazio')
  
  
  cy.log('Caso 2: Apenas primeiro nome preenchido')
  cy.get('[name="firstName"]').type('Daniel')
  cy.get('[name="firstName"]').clear()

 
  cy.log('Caso 3: Senhas não coincidem')
  cy.get('[name="firstName"]').type('Daniel')
  cy.get('[name="lastName"]').type('Reis')
  cy.get('[name="username"]').type('tester_123')
  cy.get('[name="password"]').type('123456')
  cy.get('[name="confirmPassword"]').type('654321')
  cy.contains('Password does not match').should('be.visible')
  
  cy.get('[name="firstName"]').clear()
  cy.get('[name="lastName"]').clear()
  cy.get('[name="username"]').clear()
  cy.get('[name="password"]').clear()
  cy.get('[name="confirmPassword"]').clear()
})


  
})