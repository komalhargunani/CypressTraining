const myinfoJson = require('/home/excellarate/cypress/Training/Cypress/Day1/cypress/pages/pagesJson/myinfo.json')

class MyInfo{

    getMyInfoScreen(){
        return cy.get(myinfoJson.myinfolink).click();
    }

    verifyDetails(){
        cy.get(myinfoJson.loc_firstname).should('contain.value', 'Komal');
    }

    editDetails(){ 
        cy.get(myinfoJson.loc_enableEdit).click();
        cy.get(myinfoJson.loc_firstname).clear().type('AAdi');
        cy.get(myinfoJson.loc_svbtn).click();

        
    }

    verifyEditedDetails(){
        cy.get(myinfoJson.loc_firstname).should('contain.value', 'AADi');
        
    }
}

const myinfo = new MyInfo();
export default myinfo;