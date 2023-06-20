describe('Exercise1',()=>{
    it('iframe', ()=>{
        cy.visit('http://demo.automationtesting.in/Frames.html');
        let iframe = cy.get('#singleframe').its('0.contentDocument.body').should('be.visible').then(cy.wrap);
        iframe.type('test');
       
       
       //cy.get('#singleframe').its('0.contentDocument.body').find('/html[1]/body[1]/section[1]/div[1]/div[1]/div[1]/input[1]').type('test');
        
    })
          
    })