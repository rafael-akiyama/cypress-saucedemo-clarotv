
import { ELEMENTS as el } from "./elements"
import { CREDENTIALS } from "../support/constants"

class LoginPage {

  visit() {
    cy.visit(el.site)
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

  realizarLogin() {
    const { username, password } = CREDENTIALS.VALID_USER
    this.preencherUsuario(username)
    this.preencherSenha(password)
    this.clicarLogin()
  }
}

export default LoginPage
