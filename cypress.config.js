const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rjxe3m',
  env: {
    url: "https://formy-project.herokuapp.com/",
  },
  retries:{
    runMode:1,
    openMode:1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/Integrations/pages/*.js',
  },
});
