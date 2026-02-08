import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import InventoryPage from "../../pages/InventoryPage"
import CartPage from "../../pages/CartPage"
import CheckoutPage from "../../pages/CheckoutPage"
import { CHECKOUT_DATA } from "../constants"

const inventoryPage = new InventoryPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()



When("adiciona um produto ao carrinho", () => {
  inventoryPage.adicionarProdutoAoCarrinho()
  cy.screenshot('adicionar-produto-carrinho', { capture: 'fullPage' })
  inventoryPage.irParaCarrinho()
  cy.screenshot('visualizar-carrinho', { capture: 'fullPage' })
})

When("finaliza o checkout com dados válidos", () => {
  cartPage.clicarCheckout()
  cy.screenshot('checkout-informacoes', { capture: 'fullPage' })
  checkoutPage.preencherDados(CHECKOUT_DATA.VALID_CHECKOUT.firstName, CHECKOUT_DATA.VALID_CHECKOUT.lastName, CHECKOUT_DATA.VALID_CHECKOUT.zipCode)
  checkoutPage.continuar()
  cy.screenshot('checkout-overview', { capture: 'fullPage' })
  checkoutPage.finalizar()
})

Then("o pedido deve ser finalizado com sucesso", () => {
  checkoutPage.validarSucesso()
  cy.screenshot('validacao-checkout-completo', { capture: 'fullPage' })
})
