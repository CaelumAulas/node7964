## Por que vocês tao aqui pra ver Node/ O que vcs esperam do Node
- Conhecer o mundo do JavaScript 
- Pagar boletinhos :) 
- Pegar tecnologias novas
- Mais rápido pra desenvolver
- Focando em micro-serviços (Nginx)
- mais flexível que outras linguagens do back
- APIs em Node
- Web Socket (esse é legal!)


## Alinhamento pré-curso
- MEAN
    - 

- Revisão de JavaScript 
    - criando uma parada legal
    - JavaScript Moderno
        - var, let, const
        - callback
        - promise
        - async/await
         
- Conexão com Banco de dados
    - MySQL
        - NoSQL, SQL
- Qualidade de Código e Arquitetura
- Testes
- REST, APIs
- WebSocket


## Dicas de JavaScript robótico
- https://www.youtube.com/watch?v=tDuKFBH4Kuw
- http://johnny-five.io/


## Começando o curso
- Node
    - "Aplicações leves em JS"
    - "Resolve Front e Back End"
    - "JavaScript rodando fora do browser"

- Ryan Dahl
    - Node = https://github.com/libuv/libuv + https://github.com/v8/v8 (sC++)
    - "Poder pras pessoas"
    - Back End
        - Sistema de estoque: Casa do Códego

- Browser
    - Sobe um popup/janelinha
- ``

### Tipos de JS

- Linguagem JavaScript 
- JS do Browser
    - Janela
    - Manipular elementos
- JS do Node
    - SO
    - Redes...

## Apps desktop com JS
- https://electronjs.org/
- https://phonegap.com/
- Web é web

## Linter
    // Style guide de código!
    // https://standardjs.com/ (sem ;)
    // https://github.com/airbnb/javascript
    

## Dicas sobre http
- https://httpstatusdogs.com


## Coisas internas do v8
- https://www.youtube.com/watch?v=i3LRWERf74M


## Mexendo com Npm Scripts
1 - npm init 
    - aperta enter até o infinito

2 - checa se o nodemon e o express estão em
dependencies

3 - npm install (sem nada depois, gera a pasta
node_modules)

4 - É possível adicionar qualquer comando na parte de scripts do package.json e chamar com npm run nomedocomando

## Começando com programação funcional:
- https://www.youtube.com/watch?v=e-5obm1G_FY


## JS por debaixo dos panos (Arrays):
Array.prototype.forEach = function(funcao) {
    const array = this
    for(item of array) {
        funcao(item)
    }
}

Array.prototype.map = function(funcao) {
    const array = this
    const novoArray = []
    for(item of array) {
        novoArray.push(funcao(item))
    }
    return novoArray
}