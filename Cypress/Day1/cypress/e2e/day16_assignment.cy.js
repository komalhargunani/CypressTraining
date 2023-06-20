// <reference types='cypress' />
import login from '/home/excellarate/cypress/Training/Cypress/Day1/cypress/pages/pagesClasses/loginPage.js'
import myinfo from '/home/excellarate/cypress/Training/Cypress/Day1/cypress/pages/pagesClasses/myInfoPage.js'


describe.only("Exercise - Implement POM ", function () {
    beforeEach('HRMS Login', ()=>{
        //cy.visit('https://hrms.synerzip.in/symfony/web/index.php/auth/login');
        login.getHRMSLoginScreen();
        login.enterUsename('komal.hargunani');
        login.enterPassword('Komal@123');
        login.clickLoginBtn();
    })

    it('MyInfo Page', ()=>{
        myinfo.getMyInfoScreen();
        myinfo.verifyDetails();
        myinfo.editDetails();
        myinfo.verifyEditedDetails();

    })




})