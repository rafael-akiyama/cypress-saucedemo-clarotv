Feature: Login SauceDemo

  Scenario: Login com sucesso
    Given que o usuário está na página de login
    When ele informa credenciais válidas
    Then ele deve ver a página de produtos
