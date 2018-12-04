const express = require('express')
const app = express()


app.get('/', function(request, response) {
    response.send('Código da home!')
})

app.get('/produtos', function(request,response) {
    const produtos = [
        'Livro Nodejs - R$40,00',
        'Livro Ruby - R$40,00',
    ]   

    response.send(`
        <ul>
            ${
                produtos.map(function(item) {
                    return `<li>${item}</li>`
                }).join('')
            }
        <ul>
    `)
})

const port = 3000
app.listen(port, function() {
    console.log(`
        Servidor subiu com sucessinhos!
        Acesse por meio de http://localhost:${port}
    `)
})