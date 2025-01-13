const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'czgaxu',
  viewportHeight: 1080,
  viewportWidth: 1920,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl : 'https://www.iyzico.com',
    excludeSpecPattern:['**/1-getting-started','**/2-advanced-examples'],
    chromeWebSecurity: false,
    experimentalSessionAndOrigin:true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
  },
});
