const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './cypress/reports/cucumber-json',
  reportPath: './cypress/reports/cucumber-html',
  metadata: {
    browser: {
      name: 'chrome',
      version: '120'
    },
    device: 'Local test machine',
    platform: {
      name: 'Windows',
      version: '11'
    }
  },
  customData: {
    title: 'Relatório de Testes BDD',
    data: [
      { label: 'Project', value: 'Cypress SauceDemo' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Cycle', value: 'Testes E2E' },
      { label: 'Execution Start Time', value: new Date().toLocaleString('pt-BR') }
    ]
  }
});

console.log('✅ Relatório Cucumber HTML gerado com sucesso!');
console.log('📁 Localização: cypress/reports/cucumber-html');
