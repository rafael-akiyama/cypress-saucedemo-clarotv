class CartPage {

  validarPagina() {
    cy.url().should('include', '/cart.html')
  }

  clicarCheckout() {
    cy.get('[data-test="checkout"]').click()
  }
}

export default CartPage
