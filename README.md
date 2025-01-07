# Testes Automatizados no Swag Labs com Cypress

Este repositório contém testes automatizados para o **SwagLabs**, um site de compra e autenticação simulado, desenvolvidos utilizando o framework [Cypress](https://www.cypress.io/). 

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades Testadas](#funcionalidades-testadas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Informações adicionais](#informações-adicionais)

## Sobre o Projeto

O Swag Labs é um projeto de demonstração disponibilizado pela Sauce Labs que simula uma aplicação de e-commerce para fins de estudo e prática de testes (principalmente testes de automação).


Os testes automatizados cobrem diferentes cenários, como casos de sucesso e falhas esperadas.

## Funcionalidades Testadas

- **Login**: Testa a autenticação de usuários com credenciais válidas e inválidas.
- **Listagem de produtos**: Simular ordenação (por preço ou nome) e filtrar os itens para verificar a funcionalidade de listagem.
- **Carrinho de compras**: Simular adição e remoção de produtos no carrinho, visualizar os itens selecionados, total e contagem de itens
- **Checkout**: Simular o processo de finalização da compra, incluir dados como nome, sobrenome e CEP (fictícios)
  
## Tecnologias Utilizadas

- [Cypress]: Framework de testes automatizados E2E.
- [VSCode]: IDE de desenvolvimento
- [Node.js]: Ambiente de execução para JavaScript.

## Informações adicionais🚨

#### - Perfis de usuário

- standard_user: Usuário “comum” que consegue usar o site sem problemas.
- locked_out_user: Não consegue fazer login. Útil para testar mensagens de erro e bloqueio.
- problem_user: Propositalmente gera problemas de interface (imagens quebradas, itens incorretos etc.).
- performance_glitch_user: Traz lentidão proposital para testar scripts que lidam com variações de performance.
