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

## Para guardar dados desordenados/logs/enfim...
- https://www.elastic.co/
    - Usem o kibana
- https://www.youtube.com/watch?v=M7le0OEF9NQ
- https://hadoop.apache.org/

## Usando MySQL 
1 - Logar no mysql
```terminal
mysql -u root -p  
Enter password: caelum
```
2 - CREATE DATABASE casadocodego;
3 - USE casadocodego;
4 - 
CREATE TABLE livros (
    id INT(11) NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(255) DEFAULT NULL,
    preco DECIMAL(10,2) DEFAULT NULL,
    descricao TEXT,
    PRIMARY KEY (id)
)
5 - 
INSERT INTO livros (titulo, preco, descricao)
VALUES ('Livro Ruby', 10.10, 'Um livro show');

INSERT INTO livros (titulo, preco, descricao)
VALUES ('Livro NodeJS', 10.10, 'Um livro show');

6 - SELECT * FROM livros;
> Tem que aparecer os livros criados por vocês :) 


MySQL
- Relacional
- SQL é que faz as consultas/inserções
- Consistência de dados
    - Garantir a integridade dos relacionamentos consome tempo/processamento
        - 

- Cliente
    - Pedido
- Produtos
    - Promoção


MongoDB
- Não Relacional
- Sintaxe para mexer parece JS
- Consistência de dados
    - Muito bom para escrita!
    - Duplicatas


- Log
- Dados sem estrutura 

## Processando coisas muito pesadas com Node
- https://www.npmjs.com/package/co (Co routines)


## Dicas de Livros
- https://www.amazon.com.br/Refactoring-Improving-Design-Existing-Code/dp/0134757599?tag=goog0ef-20&smid=A1ZZFT5FULY4LN&ascsubtag=go_1494986073_58431735035_285514469186_aud-519888259198:pla-485032980911_c_
- https://www.youtube.com/watch?v=Nsjsiz2A9mg
- https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675?tag=goog0ef-20&smid=A1CMRKH3IQBK4B&ascsubtag=go_1494986073_58431735035_285514469186_aud-519888259198:pla-566080525912_c_


## Ajude o front do seu trampo:
- https://reactjs.org/docs/hooks-intro.html


## Coisas de API
- https://www.telerik.com/fiddler
- https://www.telerik.com/


## Dicas de deploy
- https://code.lengstorf.com/deploy-nodejs-ssl-digitalocean/
- Root: https://aws.amazon.com/free/?sc_channel=PS&sc_campaign=acquisition_BR&sc_publisher=google&sc_medium=ACQ-P%7CPS-GO%7CBrand%7CDesktop%7CSU%7CCore%7CCore%7CBR%7CEN%7CText&sc_content=Brand_Core_HV_e&sc_detail=aws&sc_category=Core&sc_segment=293653263287&sc_matchtype=e&sc_country=BR&s_kwcid=AL!4422!3!293653263287!e!!g!!aws&ef_id=EAIaIQobChMIiYiUqNyO3wIVEwaRCh2IbQrvEAAYASAAEgLTQvD_BwE:G:s
- Meio termo: https://www.digitalocean.com/products/droplets/?_campaign=G|SEARCH|B|CORE&_adgroup=CORE|DigitalOcean&_keyword=digital%20ocean&_device=c&_copytype=biz_ad&_adposition=1t1&_medium=brand_sem&_source=google&_dkitrig=&_2dkitrig=&gclid=EAIaIQobChMIltDkn9yO3wIVlquWCh2TswcREAAYASAAEgJm5fD_BwE
- Nutella: https://devcenter.heroku.com/articles/git


- Curso de docker pago: 
    - https://cursos.alura.com.br/course/docker-e-docker-compose 
- Fonte gratuita: https://github.com/gomex/docker-para-desenvolvedores

## Testes
- Testes
    - Documentação
        - **Um código bem escrito já substitui uma documentação**
        - Mofa, ngm mexe nisso;
    - Human: Sempre façam 
    - Unitário: É o teste de uma parte pequena do sistema tipo uma função 
    - Integração: APIs
    - Aceitação/e2e: https://www.cypress.io/ 
    - Carga: https://artillery.io/docs/getting-started/
    - essencial
    - wtf?
- code review: https://hipsters.tech/pull-requests-e-code-review-hipsters-64/