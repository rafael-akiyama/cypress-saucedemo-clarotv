Feature: Fluxo de checkout

  Scenario: Realizar login e checkout com sucesso
    Dado que o usuário está na página de login
    Quando ele informa credenciais válidas
    Então ele deve ver a página de produtos
    Quando adiciona um produto ao carrinho
    E finaliza o checkout com dados válidos
    Então o pedido deve ser finalizado com sucesso
