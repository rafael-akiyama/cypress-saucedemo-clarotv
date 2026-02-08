
import { ELEMENTS as el } from "./elements"
class InventoryPage {

  validarPagina() {
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
    cy.screenshot('1.validacaoLogin')
  }

  adicionarProdutoAoCarrinho() {
    cy.get(el.botaoAdicionarMochila).click()
  }

  irParaCarrinho() {
    cy.get(el.botaoCarrinho).click()
  }
}

export default InventoryPage
