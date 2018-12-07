// Base de configs
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')


const cors = require('cors')
app.use(cors())

// fetch('http://localhost:3000/produtos', {
// 	method: 'POST',
// 	headers: {
// 		'Accept': 'application/json',
// 		'Content-type': 'application/json'
// 	},
// 	body: JSON.stringify({
//         "titulo": "teste",
//         "preco": 10,
//         "descricao": "uadshudashudsahuasduh"
//     })
// })



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


// Autoload 
const consign = require('consign')
consign()
    .include('./rotas')
    .into(app)
// require('./rotas/home')(app)
// require('./rotas/produtos')(app)

// const rotaProdutos = require('./rotas/produtos')
// rotaProdutos(app)


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