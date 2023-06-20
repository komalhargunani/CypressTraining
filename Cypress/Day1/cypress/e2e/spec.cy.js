/// <reference types = "cypress" />
describe('Practice Test Suite',() => {
  it('Practice Test Case', ()=> {
      cy.visit('https://www.saucedemo.com/')
      cy.url().should('include','https://www.saucedemo.com/')
     // cy.get('#user-name').clear();
      //cy.get('#user-name').type('standard_user');
      // cy.get('[data-test="password"]').clear();
      // cy.get('[data-test="password"]').type('secret_sauce');
      // cy.get('.login_logo').should('contain.text','SWAGLABS');




  })



})