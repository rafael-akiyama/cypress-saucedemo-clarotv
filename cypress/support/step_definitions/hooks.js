import { Before, BeforeStep } from "@badeball/cypress-cucumber-preprocessor"

Before(function ({ pickle }) {
  const scenario = pickle.name;
  const separator = '─'.repeat(60);
  cy.log(`📋 Cenário: ${scenario}`)
  cy.log(separator)
  return cy.task('log', `\n📋 Cenário: ${scenario}`).then(() => {
    return cy.task('log', separator)
  })
})

BeforeStep(function ({ pickleStep }) {
  const stepText = pickleStep.text;
  const keyword = pickleStep.keyword.trim();
  
  cy.log(`${keyword} ${stepText}`)
  return cy.task('logStep', { keyword, text: stepText })
})
