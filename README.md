<p align="center">
  <img align="" alt="mouse" src="https://github.com/gabiazevedo/cookmaster-project/blob/main/tumblr_mfysn5nrer1rtq0ilo1_500.gif?raw=true" height="270px" width="80%" />
</p>

# 🍔 Cookmaster-Project 🍔

Neste novo projeto deverá ser possível fazer o cadastro e login de pessoas usuárias, onde apenas essas pessoas poderão acessar, modificar e deletar as receitas que cadastrou.</br>

### A API deve conter 4 (quatro) rotas:

- [x] - POST - _Create_
- [x] - GET - _Read_
- [x] - PUT - _Update_ 
- [x] - DELETE - _Delete_

## Requisitos do projeto
  ### Requisitos Obrigatórios<br>
    [x] 1 - Crie um endpoint para o cadastro de usuários
    [x] 2 - Crie um endpoint para o login de usuários
    [x] 3 - Crie um endpoint para o cadastro de receitas
    [x] 4 - Crie um endpoint para a listagem de receitas
    [x] 5 - Crie um endpoint para visualizar uma receita específica
    [x] 6 - Crie uma query em mongo que insira uma pessoa usuária com permissões de admin
    [x] 7 - Crie um endpoint para a edição de uma receita
    [x] 8 - Crie um endpoint para a exclusão de uma receita
    [x] 9 - Crie um endpoint para a adição de uma imagem a uma receita
    [x] 10 - Crie um endpoint para acessar a imagem de uma receita
    [ ] 11 - Crie testes de integração que cubram no mínimo 30% dos arquivos em `src`, com um mínimo de 50 linhas cobertas
  
  ### Requisitos Bônus
    [x] 12 - Crie um endpoint para cadastro de pessoas administradoras
    [ ] 13 - Crie testes de integração que cubram no mínimo 60% dos arquivos em `src`, com um mínimo de 100 linhas cobertas
    [ ] 14 - Crie testes de integração que cubram no mínimo 90% dos arquivos em `src`, com um mínimo de 150 linhas cobertas

## Orientações para start da aplicação 📋

1. Clone o repositório

- `git@github.com:gabiazevedo/cookmaster-project.git`.

2. Instale as dependências

- `npm install`

3. Crie um arquivo `.env` na pasta raiz do projeto para configurar as informações de conexão com o banco de dados.
```
HOST=locahost
```
## Desenvolvimento 👩‍💻

Você vai desenvolver todas as camadas da aplicação (Models, Service e Controllers) a partir do seu código no projeto cookmaster.

Através dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`, para as pessoas mais íntimas 😜).

Para realizar qualquer tipo de alteração no banco de dados (como cadastro, edição ou exclusão de receitas) será necessário autenticar-se. Além disso, as pessoas usuárias devem poder ser clientes ou administradores. Pessoas clientes apenas poderão disparar ações nas receitas que ele mesmo criou. Já uma pessoa administradora pode disparar qualquer ação em qualquer receita.

A autenticação deverá ser feita via `JWT`.

O código para cadastro de pessoas usuárias deve ser criado por você utilizando os conhecimentos adquiridos nesse bloco.

Deverá ser possível adicionar uma imagem à uma receita, utilizando o upload de arquivos fornecido pelo `multer`.

## Próximas implementações 💯

- Implementação dos testes de integração.

### Desenvolvido por:

💬 Gabriela Azevedo </br>
<a href="https://www.linkedin.com/in/gabiazevedoms/" target="_blank">
  <img src="https://cdn.icon-icons.com/icons2/2558/PNG/512/scribble_social_linkedin_logo_icon_153103.png" width="48px" height="48px">
</a>
