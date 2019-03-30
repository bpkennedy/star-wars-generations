describe('Basic startup', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should display common elements in navigation bar', () => {
    cy.contains('Star Wars Generations')
    cy.contains('About')
  })
  it('should be able to navigate to About page', () => {
    cy.visit('/about')
    cy.contains('This is an about page')
  })
})
