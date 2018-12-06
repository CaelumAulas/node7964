const ProdutosDAO = require('../infra/produtosDAO')
module.exports = function(app) {
    app.get('/produtos', function(request,response) {
        const produtosDAO = new ProdutosDAO()

        produtosDAO.pegaTodosOsLivros(function(livros) {
            const produtos = livros
            response.render('produtos/lista', {
                produtosQueVemDoController: produtos
            })
        })
    })
    app.post('/produtos', function(req,res) {
        console.log('req.body:', req.body)
        const produtosDAO = new ProdutosDAO()

        // 1 - Pegarem o dado do produto
        // 2 - criar o código que salva um livro novo :)
        // Deixa ele pronto aqui \/
        
        // if() ///

        const livro = { // Data Transfer Object (DTO)
            titulo: req.body.titulo,
            preco: req.body.preco,
            descricao: req.body.descricao,
        } 

        produtosDAO
            .inserirLivro(livro)
            .then(function(idDoLivro) {
                return {
                    titulo: livro.titulo,
                    id: idDoLivro
                }
            })
            .then(function(livroDoThenAnterior) {
                res.send(`
                    Você tentou
                    cadastrar um produtinho
                    e deu certo: 
                        ${livroDoThenAnterior.id}
                        ${livroDoThenAnterior.titulo}
                        `)
            })


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



