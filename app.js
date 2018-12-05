console.log('alo alo')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')


require('./rotas/home')(app)

const rotaProdutos = require('./rotas/produtos')
rotaProdutos(app)

module.exports = app