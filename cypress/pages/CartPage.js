
import { ELEMENTS as el } from "./elements"

class CartPage {

  validarPagina() {
    cy.url().should('include', '/cart.html')
  }

  clicarCheckout() {
    cy.get(el.botaoCheckout).click()
  }
}

export default CartPage
