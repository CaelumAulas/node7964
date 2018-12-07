console.log('alo alo')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')



app.set('view engine', 'ejs')

// 1 - Ajustar o bodyparser pra receber JSON
app.use(bodyParser.json({ extended: false }))
// 2 - fazer o res.format para responder quem vier via JSON

app.use(bodyParser.urlencoded({ extended: false })) // FormData
app.use(express.static('./public'))

// 1 - acessando o diretorio public
// 2 - gerando uma rota pra cada arquivo
// 3 - disponibilizando isso
// app.get('/css/bootstrap.min.css', function(req,res){

// })

require('./rotas/home')(app)

const rotaProdutos = require('./rotas/produtos')
rotaProdutos(app)


app.use((req,res) => {
    res.status(404)
    res.format({
        html: () => {
            res.send('Página 404!')
        },
        json: () => {
            res.send({
                message: 'Página 404!'
            })
        },
    })
})

module.exports = app