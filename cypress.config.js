const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: 'id6xas',

  e2e: {
    baseUrl: "https://reqres.in/",
    specPattern: "cypress/all-tests",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    "googleUrl": "https://store.google.com/us"
  }
});
