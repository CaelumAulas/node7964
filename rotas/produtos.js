const connectionFactory = require('../infra/connectionFactory')

const produtosDAO = require('../infra/produtosDAO')
module.exports = function(app) {
    app.get('/produtos', function(request,response) {
        const connection = connectionFactory()
        produtosDAO.pegaTodosOsLivros(function(livros) {
            const produtos = livros
            response.render('home', {
                produtosQueVemDoController: produtos
            })
        })
        
        // connection.query('SELECT * FROM livros', function(err, results) {
        //     connection.end()
        //     const produtos = results
        // })
    })

    app.get('/produtos/:id', function(req,res) {
        // Pegar um produto por ID
        // Organizar o código de acesso ao banco
        const connection = connectionFactory()
        connection.query(`SELECT * FROM livros WHERE id = ${req.params.id}`, function(err, results) {
            res.send(results)
        })
        connection.end()
    })
}



