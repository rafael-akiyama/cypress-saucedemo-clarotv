
const el = require('./elements').ELEMENTS;
class InventoryPage {

  validarPagina() {
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  }

  adicionarProdutoAoCarrinho() {
    cy.get(el.botaoAdicionarMochila).click()
  }

  irParaCarrinho() {
    cy.get(el.botaoCarrinho).click()
  }
}

export default InventoryPage
