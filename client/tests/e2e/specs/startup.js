describe('Basic startup', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should display common elements in navigation bar', () => {
    cy.contains('Star Wars Generations').should('exist')
    cy.contains('Login').should('exist')
  })
  it('can visit navigation items', () => {
    cy.contains('Home page').should('exist')
    cy.contains('Email address:').should('not.exist')
    cy.contains('Login').click()
    cy.contains('Home page').should('not.exist')
    cy.contains('Email address:').should('exist')
    cy.contains('Star Wars Generations').click()
    cy.contains('Home page').should('exist')
    cy.contains('Email address:').should('not.exist')
  })
})
