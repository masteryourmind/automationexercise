
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: "https://automationexercise.com",
    defaultCommandTimeout: 10000,
    
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.family === "chromium") {
          launchOptions.preferences.default = {
            ...launchOptions.preferences.default,
            profile: {
              ...launchOptions.preferences.default?.profile,
              password_manager_leak_detection: false,
            },
          };
        }

        return launchOptions;
      });

      return config;
    },
  },
});
