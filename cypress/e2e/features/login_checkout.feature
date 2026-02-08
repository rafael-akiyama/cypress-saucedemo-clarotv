Feature: Fluxo de checkout

  Scenario: Realizar login e checkout com sucesso
    Given que o usuário está na página de login
    When ele informa credenciais válidas
    Then ele deve ver a página de produtos
    When adiciona um produto ao carrinho
    And finaliza o checkout com dados válidos
    Then o pedido deve ser finalizado com sucesso
