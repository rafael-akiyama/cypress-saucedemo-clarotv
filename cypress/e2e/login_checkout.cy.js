import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('SauceDemo - Fluxo de Login e Checkout', () => {

  const loginPage = new LoginPage()
  const inventoryPage = new InventoryPage()
  const cartPage = new CartPage()
  const checkoutPage = new CheckoutPage()

  beforeEach(() => {
    loginPage.visit()
    loginPage.realizarLogin('standard_user', 'secret_sauce')
    inventoryPage.validarPagina()
  })

  it('Deve realizar o checkout com sucesso', () => {

    inventoryPage.adicionarProdutoAoCarrinho()
    inventoryPage.irParaCarrinho()

    cartPage.validarPagina()
    cartPage.clicarCheckout()

    checkoutPage.preencherDados('Rafael', 'Akiyama', '12345')
    checkoutPage.continuar()
    checkoutPage.finalizar()
    checkoutPage.validarSucesso()
  })
})
