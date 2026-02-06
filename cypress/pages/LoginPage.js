class LoginPage {

  visit() {
    cy.visit('https://www.saucedemo.com/')
    cy.screenshot('1.validacaoPagInicial')
  }

  preencherUsuario(usuario) {
    cy.get('[data-test="username"]').type(usuario)
  }

  preencherSenha(senha) {
    cy.get('[data-test="password"]').type(senha)
  }

  clicarLogin() {
    cy.get('[data-test="login-button"]').click()
  }

  realizarLogin(usuario, senha) {
    this.preencherUsuario(usuario)
    this.preencherSenha(senha)
    this.clicarLogin()
    cy.screenshot('2.validacaoLogado');
  }
}

export default LoginPage
