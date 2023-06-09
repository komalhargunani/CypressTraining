/// <reference types='cypress' />

describe('Exercise1',()=>{
    it('Excercise1', ()=>{
        cy.visit('https://kitchen.applitools.com/ingredients/canvas');
        cy.get('#burger_canvas').click();
        cy.go('forward');




    })



})