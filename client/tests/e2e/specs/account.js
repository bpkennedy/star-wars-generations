describe('Account', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Login').click()
    cy.contains('Create').click()
  })

  it('should contain a email, display name, password, confirm password, and submit buttons', () => {
    cy.create('someEmail@email.com', 'Awesome Guy', 'somePassword', 'somePassword')
    cy.contains('The email field must be a valid email.').should('not.exist')
    cy.contains('The email field is required.').should('not.exist')
    cy.contains('The password field is required.').should('not.exist')
    cy.contains('Password does not match.').should('not.exist')
  })

  it('should show validation error if email not valid', () => {
    cy.create('someEmail@em', 'Awesome Guy', 'somePassword', 'somePassword')
    cy.contains('The email field must be a valid email.')
    cy.contains('Reset').click()
  })

  it('should show validation error if email, display name, password is empty or password mismatch', () => {
    cy.create('', 'Awesome Guy', 'somePassword', 'somePassword')
    cy.contains('The email field is required.').should('exist')
    cy.contains('The display field is required.').should('not.exist')
    cy.contains('The password field is required.').should('not.exist')
    cy.contains('Reset').click()
    
    cy.create('test@email.com', '', 'somePassword', 'somePassword')
    cy.contains('The email field is required.').should('not.exist')
    cy.contains('The display field is required.').should('exist')
    cy.contains('The password field is required.').should('not.exist')
    cy.contains('Reset').click()
    
    cy.create('test@email.com', 'Buddy Lee', '', 'somePassword')
    cy.contains('The email field is required.').should('not.exist')
    cy.contains('The display field is required.').should('not.exist')
    cy.contains('The password field is required.').should('exist')
    cy.contains('Reset').click()
    
    cy.create('test@email.com', 'Buddy Lee', 'somePassword', '')
    cy.contains('The email field is required.').should('not.exist')
    cy.contains('The display field is required.').should('not.exist')
    cy.contains('The password field is required.').should('not.exist')
    cy.contains('The confirmpassword field is required.').should('exist')
    cy.contains('Reset').click()
    
    cy.create('test@email.com', 'Buddy Lee', 'somePassword', 'notMatchPass')
    cy.contains('The email field is required.').should('not.exist')
    cy.contains('The display field is required.').should('not.exist')
    cy.contains('The password field is required.').should('not.exist')
    cy.contains('The confirmpassword confirmation does not match.').should('exist')
    cy.contains('Reset').click()
  })
  
  it('should go to Login if click on the link', () => {
    cy.contains('Already a member?').click()
    cy.contains('Login')
  })
})
