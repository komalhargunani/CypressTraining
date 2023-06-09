/// <reference types='cypress' />
/// <reference types="cypress-xpath" />

describe('Exercise4',()=>{
    it('Excercise4', ()=>{
        
        cy.visit('http://demo.automationtesting.in/FileUpload.html');
        cy.get('#input-4').click({ force: true });
        cy.get('input[type="file"]').attachFile('info.txt');
        cy.get('.fileinput-upload > .hidden-xs').click();
        cy.xpath('//body/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]').should('have.text','info.txt');
        //cy.get('#preview-1686296412299-0 > .file-thumbnail-footer > .file-footer-caption').should('contain', 'info.txt');

        
    })
   


})