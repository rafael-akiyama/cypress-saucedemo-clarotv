Feature: Login SauceDemo

  Scenario: Login com sucesso
    Dado que o usuário está na página de login
    Quando ele informa credenciais válidas
    Então ele deve ver a página de produtos
