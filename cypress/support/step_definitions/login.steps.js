import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import InventoryPage from "../../pages/InventoryPage"

const inventoryPage = new InventoryPage()

Then("ele deve ver a página de produtos", () => {
  inventoryPage.validarPagina()
  cy.screenshot('validacao-login-sucesso', { capture: 'fullPage' })
})