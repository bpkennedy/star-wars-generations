// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
  cy.contains('Email').click()
  if (email.length > 0) {
    cy.focused().clear().type(email) 
  } else {
    // kinda hacky way to simulate a user leaving this field empty
    cy.focused().type('toBeCleared').clear()
  }
  cy.contains('Password').click()
  if (password.length > 0) {
    cy.focused().clear().type(password) 
  } else {
    cy.focused().type('toBeCleared').clear()
  }
  cy.contains('Submit').click()
})

Cypress.Commands.add('create', (email, display, password, confirmPass) => {
  cy.contains('Email').click()
  if (email.length > 0) {
    cy.focused().clear().type(email)
  } else {
    cy.focused().type('toBeCleared').clear()
  }
  cy.contains('Display').click()
  if (display.length > 0) {
    cy.focused().clear().type(display)
  } else {
    cy.focused().type('toBeCleared').clear()
  }
  cy.contains('Password').eq(0).click()
  if (password.length > 0) {
    cy.focused().clear().type(password) 
  } else {
    cy.focused().type('toBeCleared').clear()
  }
  cy.contains('Confirm Password').click()
  if (confirmPass.length > 0) {
    cy.focused().clear().type(confirmPass)
  } else {
    cy.focused().type('toBeCleared').clear()
  }
  cy.contains('Submit').click()
})