class CheckoutPage {

  preencherDados(nome, sobrenome, cep) {
    cy.get('[data-test="firstName"]').type(nome)
    cy.get('[data-test="lastName"]').type(sobrenome)
    cy.get('[data-test="postalCode"]').type(cep)
  }

  continuar() {
    cy.get('[data-test="continue"]').click()
  }

  finalizar() {
    cy.get('[data-test="finish"]').click()
  }

  validarSucesso() {
    cy.get('.complete-header')
      .should('contain.text', 'Thank you for your order')
      cy.screenshot('3.validacaoCheckoutComplete')
  }
}

export default CheckoutPage
