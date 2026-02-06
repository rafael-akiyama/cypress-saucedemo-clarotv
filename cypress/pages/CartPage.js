
const el = require('./elements').ELEMENTS;

class CartPage {

  validarPagina() {
    cy.url().should('include', '/cart.html')
  }

  clicarCheckout() {
    cy.get(el.botaoCheckout).click()
  }
}

export default CartPage
