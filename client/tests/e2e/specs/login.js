describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Login').click()
  })

  it('should contain a username, password inputs and submit button', () => {
    cy.login('someEmail@email.com', 'somePassword')
    cy.contains('The email field must be a valid email.').should('not.exist')
    cy.contains('The email field is required.').should('not.exist')
    cy.contains('The password field is required.').should('not.exist')
  })

  it('should show validation error if email not valid', () => {
    cy.login('someEmail.com', 'somePassword')
    cy.contains('The email field must be a valid email.')
    cy.contains('Reset').click()
  })

  it('should show validation error if email or password is empty', () => {
    cy.login('', 'someTestPass')
    cy.contains('The email field is required.').should('exist')
    cy.contains('The password field is required.').should('not.exist')
    cy.contains('Reset').click()
    cy.login('test@email.com', '')
    cy.contains('The email field is required.').should('not.exist')
    cy.contains('The password field is required.').should('exist')
    cy.login('', '')
    cy.contains('The email field is required.').should('exist')
    cy.contains('The password field is required.').should('exist')
  })
})
