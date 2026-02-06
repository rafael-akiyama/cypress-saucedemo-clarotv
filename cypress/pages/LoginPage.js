
const el = require('./elements').ELEMENTS;
class LoginPage {

  visit() {
    cy.visit(el.site)
    cy.screenshot('1.validacaoPagInicial')
  }

  preencherUsuario(usuario) {
    cy.get(el.campoUsuarioLogin).type(usuario)
  }

  preencherSenha(senha) {
    cy.get(el.campoSenhaLogin).type(senha)
  }

  clicarLogin() {
    cy.get(el.botaoLogin).click()
  }

  realizarLogin(usuario, senha) {
    this.preencherUsuario(usuario)
    this.preencherSenha(senha)
    this.clicarLogin()
    cy.screenshot('2.validacaoLogado');
  }
}

export default LoginPage
