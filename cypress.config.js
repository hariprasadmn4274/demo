const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://testpages.herokuapp.com',
    video: true,  // Enable video recording
    videosFolder: 'cypress/videos',  // Folder where videos will be saved
    supportFile: 'cypress/support/index.js'  // Support file location
  },
});
