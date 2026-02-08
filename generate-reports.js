const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Cores para console
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m'
};

console.log(`${colors.blue}
╔═══════════════════════════════════════════════════════════════╗
║         Gerando Relatórios de Testes - SauceDemo            ║
╚═══════════════════════════════════════════════════════════════╝
${colors.reset}`);

try {
  // 1. Gerar relatório Cucumber HTML
  console.log(`${colors.yellow}📊 Gerando relatório Cucumber BDD...${colors.reset}`);
  execSync('node cypress/reports/cucumber-report.js', { stdio: 'inherit' });

  // 2. Mesclar relatórios Mochawesome
  console.log(`\n${colors.yellow}📊 Consolidando relatórios Mochawesome...${colors.reset}`);
  const mochawesomeJsonPath = 'cypress/reports/mochawesome/.jsons/*.json';
  const bundlePath = 'cypress/reports/mochawesome/mochawesome-bundle.json';
  
  execSync(`npx mochawesome-merge ${mochawesomeJsonPath} -o ${bundlePath}`, { stdio: 'inherit' });

  // 3. Gerar HTML do Mochawesome
  console.log(`${colors.yellow}📊 Gerando relatório Mochawesome HTML...${colors.reset}`);
  execSync(`npx mochawesome-report-generator ${bundlePath} -o cypress/reports/mochawesome`, { stdio: 'inherit' });

  console.log(`${colors.green}
╔═══════════════════════════════════════════════════════════════╗
║                ✅ Relatórios Gerados com Sucesso!            ║
╚═══════════════════════════════════════════════════════════════╝
${colors.reset}`);

  console.log(`${colors.blue}
📁 Relatórios disponíveis:
   
   🥒 Cucumber BDD (Relatório de Features):
      cypress/reports/cucumber-html/index.html
   
   📊 Mochawesome (Relatório Detalhado):
      cypress/reports/mochawesome/mochawesome-bundle.html
${colors.reset}`);

} catch (error) {
  console.error(`${colors.reset}\n❌ Erro ao gerar relatórios:`, error.message);
  process.exit(1);
}
