describe('Account', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Login').click()
    cy.contains('Reset Password').click()
  })

  it('should contain a email submit buttons', () => {
    cy.contains('Email').click()
    cy.focused().clear().type('someEmail@email.com')
    cy.contains('The email field must be a valid email.').should('not.exist')
  })
  
  it('should fail validation if invalid email', () => {
    cy.contains('Email').click()
    cy.focused().clear().type('someEmail@ema')
    cy.contains('The email field must be a valid email.').should('exist')
    cy.contains('Reset').click()
    
    cy.contains('Email').click()
    cy.focused().clear().type(' ')
    cy.contains('The email field is required.').should('exist')
  })
})
