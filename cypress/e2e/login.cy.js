import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('SauceDemo - Fluxo de Login e Checkout', () => {

  const loginPage = new LoginPage()
  const inventoryPage = new InventoryPage()

  it('Deve realizar o login com sucesso',() => {
    loginPage.visit()
    loginPage.realizarLogin('standard_user', 'secret_sauce')
    inventoryPage.validarPagina()
  })

})
