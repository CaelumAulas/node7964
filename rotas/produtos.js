const ProdutosDAO = require('../infra/produtosDAO')
module.exports = function(app) {
    app.get('/produtos', function(request,response) {
        response.setHeader('Access-Control-Allow-Origin', '*')

        const produtosDAO = new ProdutosDAO()

        produtosDAO.pegaTodosOsLivros(function(livros) {
            const produtos = livros
            response.format({
                html: function() {
                    response.render('produtos/lista', {
                        produtosQueVemDoController: produtos
                    })
                },
                json: function() {// Via postman: Accept application/json
                    response.send({
                        livros: produtos
                    })
                }
            })
        })
    })

    app.post('/produtos', function(req,res) {
        const Joi = require('joi')
        const livroSchema = Joi.object().keys({
            titulo: Joi.string().required(),
            preco: Joi.number().required(),
            descricao: Joi.string(),
        })

        console.log('req.body',req.body)

        Joi.validate(req.body, livroSchema, { abortEarly: false })
        .then((valor) => {
            const livro = { // Data Transfer Object (DTO)
                titulo: req.body.titulo, preco: req.body.preco,
                descricao: req.body.descricao,
            } 
            const produtosDAO = new ProdutosDAO()
            produtosDAO
                .inserirLivro(livro)
                .then(function(idDoLivro) {
                    return { titulo: livro.titulo, id: idDoLivro }
                })
                .then(function(livroDoThenAnterior) {
                    res.status(201)
                    res.format({
                        html: () => {
                            res.send(` Você tentou cadastrar um produtinho e deu certo:  ${livroDoThenAnterior.id} ${livroDoThenAnterior.titulo} `)
                        },
                        json: () => {
                            res.send({
                                mensagem: `Você tentou cadastrar um produtinho e deu certo:  ${livroDoThenAnterior.id} ${livroDoThenAnterior.titulo} `
                            })
                        }
                    })
                
                })
        })
        .catch((error) => {
            res.status(400) // Bad request
            res.format({
                html: () => {
                    res.render('produtos/form', { errors: error.details })
                },
                json: () => {
                    res.send({ errors: error.details })
                }
            })
        })
        // Customização aqui: 
        // const errors = []
        // errors['"titulo" must be a string'] = 'O título tem que ser uma string'
        // errors[erro]


    })

    app.get('/produtos/form', function(req,res) {
        res.render('produtos/form')
    })
    

    app.get('/produtos/:id', function(req,res) {
        // Pegar um produto por ID
        const idDoLivro = req.params.id
        const produtosDAO = new ProdutosDAO()


        produtosDAO.pegaUmLivroPorId(idDoLivro, function(livro) {
            res.send(livro)
        })
    })

}



