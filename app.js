console.log('alo alo')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'))

// 1 - acessando o diretorio public
// 2 - gerando uma rota pra cada arquivo
// 3 - disponibilizando isso
// app.get('/css/bootstrap.min.css', function(req,res){

// })

require('./rotas/home')(app)

const rotaProdutos = require('./rotas/produtos')
rotaProdutos(app)

module.exports = app