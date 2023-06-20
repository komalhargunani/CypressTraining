const loginJSon = require('/home/excellarate/cypress/Training/Cypress/Day1/cypress/pages/pagesJson/login.json')

class Login{

    getHRMSLoginScreen(){
        return cy.visit(loginJSon.url);
    }

    enterUsename(){
        cy.get(loginJSon.loc_username).clear();
        cy.get(loginJSon.loc_username).type(loginJSon.username);
        return this
       
    }

    enterPassword(password){ 
        cy.get(loginJSon.loc_password).clear();
        cy.get(loginJSon.loc_password).type(loginJSon.password);
    }

    clickLoginBtn(){
        return cy.get(loginJSon.loc_loginBtn).click();
    }
}

const login = new Login();
export default login;