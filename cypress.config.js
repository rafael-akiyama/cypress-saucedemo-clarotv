const { defineConfig } = require("cypress")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: 'Relatório Cypress - SauceDemo',
    embeddedScreenshots: true,
    inlineAssets: true
  },
  
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy.js,feature}",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://www.saucedemo.com",
    
    // Configuração de Vídeo e Screenshots
    video: true,
    videoCompression: 32,
    videosFolder: "cypress/videos",
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",

    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      await addCucumberPreprocessorPlugin(on, config)

      on('task', {
        log(message) {
          console.log(message)
          return null
        },
        logStep({ keyword, text }) {
          let icon = '⏩';
          if (keyword === 'Dado' || keyword === 'Given') icon = '📌';
          else if (keyword === 'Quando' || keyword === 'When') icon = '⚡';
          else if (keyword === ' Então' || keyword === 'Then') icon = '✅';
          else if (keyword === 'E' || keyword === 'And') icon = '➕';
          
          console.log(`  ${icon} ${keyword} ${text}`)
          return null
        }
      })

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      )

      return config
    }
  }
})
