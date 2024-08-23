/// <reference types="cypress" />
import loginpage from "../pages/loginpage";
import loginPage from "../pages/loginpage";

describe("third assignment for deel", () => {
  let roles = [];
  before("loading the test data", () => {
    cy.fixture("rolesdata.json").then((rolesData) => {
      roles = rolesData; // Store the array in 'this'
    });
  });

  beforeEach("navigating to the baseurl ", () => {
    cy.visit(Cypress.config("baseUrl"));
  });

  it("Login -  growth training site with with multiple roles ", () => {
    cy.wrap(roles).each((role) => {
      cy.log("Logging with role name : ", `${role.rolename}`);
      loginPage.isRoleCountryFormVisible();
      loginPage.selectRole(role.rolename);
      loginPage.selectCountry(role.country);
      loginPage.clickOnSearchButton();
      loginPage.isSalaryTableVisible();
      //asserting the text
      loginpage.elements
        .titleOfSalaryTable()
        .should("contain.text", `${role.rolename}`);
      loginpage.elements
        .titleOfSalaryTable()
        .should("contain.text", `${role.country}`);
    });
  });
});
