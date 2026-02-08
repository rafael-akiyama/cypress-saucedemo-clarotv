import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../../pages/LoginPage"
import InventoryPage from "../../pages/InventoryPage"

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

Given("que o usuário está na página de login", () => {
  loginPage.visit()
})

When("ele informa usuário {string} e senha {string}", (usuario, senha) => {
  loginPage.preencherUsuario(usuario)
  loginPage.preencherSenha(senha)
  loginPage.clicarLogin()
})

When("ele informa credenciais válidas", () => {
  loginPage.realizarLogin()
})

