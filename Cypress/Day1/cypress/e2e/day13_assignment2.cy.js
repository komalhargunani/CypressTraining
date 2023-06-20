/// <reference types='cypress' />

describe('Exercise2',()=>{
    it('Excercise2', ()=>{
        cy.viewport(1024, 768);
        cy.visit('https://demo.automationtesting.in/Alerts.html');
        cy.get('#OKTab > .btn').trigger("click");
        cy.on("window:alert", (t) => {
            //verify text on pop-up
            expect(t).to.equal("I am an alert box!");
         });
      
       




    })



})