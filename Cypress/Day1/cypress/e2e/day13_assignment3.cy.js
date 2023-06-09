/// <reference types='cypress' />

describe('Exercise3',()=>{
    it('Excercise3', ()=>{
        cy.viewport(1024, 768);
        cy.visit('https://demo.automationtesting.in/FileDownload.html');
        cy.get('#textbox').type('testing!!');
        cy.get('#createTxt').click();
        cy.get('#link-to-download').click();
    })
    it('Verify the downloaded file', () => {
        cy.readFile('/home/excellarate/cypress/Training/Cypress/Day1/cypress/downloads/info.txt')
        .should('exist')
      });



})