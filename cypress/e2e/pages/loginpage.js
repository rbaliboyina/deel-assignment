const delayTime = Cypress.config("typeDelay");
const commandDelay = Cypress.config("commandDelay");

class loginpage {
  elements = {
    role: () => cy.get('input[name="role"]'),
    country: () => cy.get('input[name="country"]'),
    search: () => cy.get('button[type="submit"]').click(),
    salaryTable: () => cy.get('div[data-qa="salary-table"]'),
    roleCountryForm: () => cy.get("form h2.MuiTypography-root"),
    titleOfSalaryTable: () => cy.get('div[data-qa="salary-table"] > h2'),
  };

  getTitleOfSalaryTable() {
    return this.elements.titleOfSalaryTable().invoke("text");
  }

  isRoleCountryFormVisible() {
    this.elements.roleCountryForm().should("be.visible");
  }
  isSalaryTableVisible() {
    this.elements.salaryTable().should("be.visible");
  }
  clickOnSearchButton() {
    this.elements.search().click();
  }

  selectRole(role) {
    this.elements
      .role()
      .type(role, { delay: delayTime })
      .wait(commandDelay)
      .focus()
      .type("{downarrow}")
      .wait(commandDelay)
      .focus()
      .type("{enter}");
  }

  selectCountry(country) {
    this.elements
      .country()
      .type(country, { delay: delayTime })
      .wait(commandDelay)
      .focus()
      .type("{downarrow}")
      .wait(commandDelay)
      .focus()
      .type("{enter}");
  }
}
module.exports = new loginpage();
