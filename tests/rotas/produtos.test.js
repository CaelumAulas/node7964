const request = require('supertest')
const app = require('../../app')
const { expect } = require('chai')
// const chai = require('chai')
// const expect = chai.expect


// Code Reeview
describe('# rotas/produtos.js', () => {
    it('Deve retornar uma lista de livros', (done) => {
        request(app)
            .get('/produtos')
            .set('Accept', 'application/json')
            .end(function(err, res) {
                if (err) throw err;
                // array de livros
                expect(res.body.livros).to.be.an('array')
                expect(res.body.livros[0]).to.have.own.property('titulo')
                expect(res.body.livros[0]).to.have.own.property('descricao')
                expect(res.body.livros[0]).to.have.own.property('preco')
                expect(res.body.livros[0]).to.have.own.property('id')
                done()
        });
    })

    // De como criar um produto
    it('deve inserir um produto', (done) => {
        request(app)
            .post('/produtos')
            .send({
                "titulo": "teste",
                "preco": 10,
                "descricao": "uadshudashudsahuasduh"
            })
            .set('Accept', 'application/json')
            .set('Content-type', 'application/json')
            .end((err, res) => {
                if (err) throw err;
                console.log(res.body)
                expect(res.status).to.be.equal(201)
                expect(res.body).to.have.own.property('mensagem')
                done()
            })
    })
})

        // Supertest automatiza:
            // Subir o servidor
            // fetch
