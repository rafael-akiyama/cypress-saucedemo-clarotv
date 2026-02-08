
import { ELEMENTS as el } from "./elements"
class CheckoutPage {

  preencherDados(nome, sobrenome, cep) {
    cy.get(el.nomeCheckout).type(nome)
    cy.get(el.sobrenomeCheckout).type(sobrenome)
    cy.get(el.cepCheckout).type(cep)
  }

  continuar() {
    cy.get(el.botaoContinuarCheckout).click()
  }

  finalizar() {
    cy.get(el.botaoFinalizarCheckout).click()
  }

  validarSucesso() {
    cy.get('.complete-header')
      .should('contain.text', 'Thank you for your order')
      cy.screenshot('2.validacaoCheckoutCompleto')
  }
}

export default CheckoutPage
