const connectionFactory = require('./connectionFactory')

class ProdutosDAO {
    constructor() {
        this.connection = connectionFactory()
    }
    pegaTodosOsLivros(callback) {
        this.connection.query('SELECT * FROM livros', (err, results) => {
            this.connection.end()
            const produtos = results
            callback(produtos)
        })
    }

    pegaUmLivroPorId(idDoLivro, callback) {
        this.connection.query(`SELECT * FROM livros WHERE id = ${idDoLivro}`, (err, results) => {
            this.connection.end()
            callback(results)
        })
    }
    
    
    inserirLivro(livro) {
        return new Promise((resolve, reject) => {
            this.connection.query(`INSERT INTO livros (titulo, preco, descricao) VALUES ("${livro.titulo}", "${livro.preco}", "${livro.descricao}") `, (err,result) => {
                this.connection.end()
                resolve(result.insertId)
            })
        })
    }
}
module.exports = ProdutosDAO
 
// module.exports = {
//     pegaTodosOsLivros: pegaTodosOsLivros, // ES5
//     pegaUmLivroPorId, // ES6 +
//     inserirLivro,
// }