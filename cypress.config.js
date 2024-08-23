const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://growth.deel.training/dev/salary-insights",
    watchForFileChanges: false,
    defaultCommandTimeout: 8000, // Default timeout for commands like cy.get()
    pageLoadTimeout: 60000, // Timeout for page loads
    requestTimeout: 10000, // Timeout for HTTP requests
    typeDelay: 200,
    commandDelay: 2000,
    video: true,

    // Prevent Cypress from rerunning tests on file changes
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
