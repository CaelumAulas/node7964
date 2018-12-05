function pegaTodosOsLivros(callback) {
    // consultar o banco
    const livros = [{ titulo: 'aa', preco: 10 }]
    // connection.query('SELECT * FROM livros', function(err, results) {
    //     connection.end()
    //     const produtos = results
    // })
    callback(livros)
}

module.exports = {
    pegaTodosOsLivros: pegaTodosOsLivros
}