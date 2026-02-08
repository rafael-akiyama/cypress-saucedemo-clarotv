# Cypress SauceDemo - Automacao E2E com BDD

Projeto de automacao E2E para validar Login e Checkout no site SauceDemo, usando Cypress com abordagem BDD (Cucumber).

## O que este projeto valida
- Login
- Checkout

## Tecnologias utilizadas
- Cypress
- Cucumber Preprocessor (BDD)
- Mochawesome (relatorio tecnico)
- multiple-cucumber-html-reporter (relatorio BDD)
- GitHub Actions (CI)
- Page Object Model (POM)

## Requisitos
- Node.js 18+ (recomendado 22)
- npm 9+ (vem com Node)
- Git

## Como baixar o projeto
```bash
git clone https://github.com/rafael-akiyama/cypress-saucedemo-clarotv.git
cd cypress-saucedemo-clarotv
npm install
```

## Como executar localmente
**Modo interativo (Cypress UI)**
```bash
npm run test:open
```

**Modo headless (terminal)**
```bash
npm run test:feature
```

**Executar e gerar relatorios**
```bash
npm run test:feature:report
```

Observacao: videos sao gerados apenas no modo headless (cypress run).

## BDD (Gherkin)
Os cenarios escritos utilizando BDD ficam em:
- cypress/e2e/features

## Relatorios, prints e videos
**Arquivos gerados localmente**
- Relatorio BDD (Cucumber HTML)
  cypress/reports/cucumber-html/index.html
- Relatorio tecnico (Mochawesome)
  cypress/reports/mochawesome/mochawesome-bundle.html
- Screenshots
  cypress/screenshots/
- Videos
  cypress/videos/

**Abrir relatorios no navegador**
```bash
npm run report:open:cucumber
npm run report:open:mochawesome
```

## CI no GitHub Actions
**Workflow**
- .github/workflows/cypress.yml

**Quando roda**
- Em push e pull request para a branch main

**O que o CI faz**
1) Checkout do codigo
2) Instalacao de dependencias
3) Execucao dos testes
4) Geracao de relatorios
5) Upload de artifacts (relatorios, screenshots, videos)

### Como visualizar no GitHub
1) Acesse a aba Actions:
   https://github.com/rafael-akiyama/cypress-saucedemo-clarotv/actions
2) Abra a execucao mais recente
3) Baixe os artifacts:
   - cucumber-report
   - mochawesome-report
   - cypress-screenshots
   - cypress-videos
4) Abra os HTMLs dos relatorios localmente

## Scripts principais
- npm run test
- npm run test:open
- npm run test:feature
- npm run test:feature:video
- npm run test:feature:report
- npm run report:generate
- npm run report:open:cucumber
- npm run report:open:mochawesome

## Autor
Rafael Akiyama
