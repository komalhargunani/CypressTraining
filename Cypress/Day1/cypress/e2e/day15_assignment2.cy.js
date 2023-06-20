/// <reference types='cypress' />
describe.only("Exercise2 - fixture file for multiple set of data ", function () {
    const availablefixtures = [
      {
        name: "register",
        context: "1",
      },
      {
        name: "register1",
        context: "2",
      },
      {
        name: "register2",
        context: "3",
      },
    ];
    availablefixtures.forEach((afixture) => {
      describe(afixture.context, () => {
        beforeEach(function () {
          cy.fixture(afixture.name).as("registerDetails");
        });
        it("Register Test " + afixture.name, function () {
          cy.visit("http://demo.automationtesting.in/Register.html");
          cy.get(':nth-child(1) > :nth-child(2) > .form-control').type(this.registerDetails.Firstname)
          cy.get(':nth-child(1) > :nth-child(3) > .form-control').type(this.registerDetails.Lastname)
          cy.get('.col-md-8 > .form-control').type(this.registerDetails.Address)
          cy.get('#eid > .form-control').type(this.registerDetails.Email)
          cy.get(':nth-child(4) > .col-md-4 > .form-control').type(this.registerDetails.Phone)
        });
      });
    });
  });
