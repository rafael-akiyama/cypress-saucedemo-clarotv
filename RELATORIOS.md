# 📊 Relatórios de Testes - Cypress SauceDemo

Este projeto gera **dois tipos de relatórios** para diferentes propósitos:

## 📋 Tipos de Relatórios

### 🥒 1. Relatório Cucumber BDD
Relatório focado em **Features e Scenarios** escritos em Gherkin (BDD).

**Características:**
- Visualização de Features e Scenarios
- Status de cada step (Given/When/Then)
- Agrupamento por Feature
- Ideal para stakeholders e Product Owners

**Localização:** `cypress/reports/cucumber-html/index.html`

---

### 📊 2. Relatório Mochawesome
Relatório técnico detalhado com screenshots e métricas.

**Características:**
- Estatísticas detalhadas de execução
- Screenshots embutidos
- Gráficos e charts
- Duração de cada teste
- Ideal para desenvolvedores e QA

**Localização:** `cypress/reports/mochawesome/mochawesome-bundle.html`

---

## 🚀 Como Usar

### Executar testes e gerar todos os relatórios
```bash
npm run test:feature:report
```

### Gerar relatórios a partir de testes já executados
```bash
npm run report:generate
```

### Abrir relatórios no navegador

**Relatório Cucumber (BDD):**
```bash
npm run report:open:cucumber
```

**Relatório Mochawesome (Detalhado):**
```bash
npm run report:open:mochawesome
```

---

## 📁 Estrutura de Relatórios

```
cypress/
├── reports/
│   ├── cucumber-json/           # JSONs gerados pelo Cucumber
│   │   └── cucumber-report.json
│   ├── cucumber-html/            # Relatório HTML do Cucumber
│   │   └── index.html           ⭐ Abra este arquivo
│   └── mochawesome/              # Relatórios Mochawesome
│       ├── .jsons/               # JSONs individuais por spec
│       ├── mochawesome-bundle.json
│       └── mochawesome-bundle.html  ⭐ Abra este arquivo
```

---

## 🎯 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run test` | Executa todos os testes |
| `npm run test:feature` | Executa apenas testes .feature |
| `npm run test:feature:report` | Executa testes + gera relatórios |
| `npm run report:generate` | Gera relatórios dos últimos testes |
| `npm run report:open:cucumber` | Abre relatório Cucumber |
| `npm run report:open:mochawesome` | Abre relatório Mochawesome |

---

## 🔧 Configuração

### Cucumber
Configurado em: `.cypress-cucumber-preprocessorrc.json`

```json
{
  "json": {
    "enabled": true,
    "output": "cypress/reports/cucumber-json/cucumber-report.json"
  }
}
```

### Mochawesome
Configurado em: `cypress.config.js`

```javascript
reporter: 'cypress-mochawesome-reporter',
reporterOptions: {
  reportDir: 'cypress/reports/mochawesome',
  html: true,
  json: true,
  charts: true,
  embeddedScreenshots: true,
  inlineAssets: true
}
```

---

## 📸 Screenshots e Vídeos

- **Screenshots** são automaticamente incluídos nos relatórios quando há falhas
- **Vídeos** são salvos em `cypress/videos/`
- Screenshots aparecem embutidos no relatório Mochawesome

---

## 🎨 Personalização

Para personalizar os relatórios, edite:
- **Cucumber:** `cypress/reports/cucumber-report.js` (metadados)
- **Mochawesome:** `cypress.config.js` (opções do reporter)

---

## ℹ️ Observações

- Relatórios são ignorados pelo Git (`.gitignore`)
- Para CI/CD, use GitHub Actions Artifacts para salvar os relatórios
- Relatórios são gerados após cada execução com `npm run test:feature:report`
