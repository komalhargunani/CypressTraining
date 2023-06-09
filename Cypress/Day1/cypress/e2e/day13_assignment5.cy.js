/// <reference types='cypress' />

describe('Exercise5',()=>{
    it('Excercise5', ()=>{
        cy.visit('http://demo.automationtesting.in/JqueryProgressBar.html');
        cy.get('#downloadButton').click();
    })
    it('WaitUntil',()=>{
            cy.waitUntil(() => cy.get('.progress-label').invoke('text').then((textt) => cy.log(textt)))
        })
                 
              
        



        




    })



