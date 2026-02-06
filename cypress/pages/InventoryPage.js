class InventoryPage {

  validarPagina() {
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  }

  adicionarProdutoAoCarrinho() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  }

  irParaCarrinho() {
    cy.get('.shopping_cart_link').click()
  }
}

export default InventoryPage
