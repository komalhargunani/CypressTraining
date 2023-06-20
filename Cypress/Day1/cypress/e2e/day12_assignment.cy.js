/// <reference types ='cypress' />

describe('assignment_day12 suite', ()=> {
    it('assignment_day12 tc', ()=>{
       // cy.viewport(1280, 720);
       cy.visit('https://www.saucedemo.com/');
       cy.get('[data-test="username"]').clear;
       cy.get('[data-test="username"]',{ timeout: 30000 }).type('standard_user');
       cy.get('[data-test="password"]').clear();
       cy.get('[data-test="password"]').type('secret_sauce');
       cy.get('.login_logo').should('contain.text','Swag Labs');
       cy.get('[data-test="login-button"]').click();
       cy.get('#item_4_title_link > .inventory_item_name').click();
       cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
       cy.get('.shopping_cart_link').click();
       cy.get('.inventory_item_price').should('contain.text', '$29.99');

        
    })
})