var http = require('http')

var rotas = []

function get(url, funcao) {
    rotas[url] = funcao
}

get('/', function(request,response) {
    response.end('Xablau')
})
                           // CallBack
var app = http.createServer(function (request, response) {
    console.log('Temos um request!')
    
    if(rotas[request.url][request.url]) {
        setTimeout(function() {
            rotas[request.url](request,response)
        }, 0)
    } else {
        response.statusCode = 404
        response.end('Pagina 404')    
    }
    // if(request.url == '/') {
    //     response.end('Home!')
    //     return
    // }
    // if(request.url == '/produtos') {
    //     response.end('Produtos!')
    //     return
    // }
})

var port = 3000
app.listen(port, function() {
    console.log(`
        Servidor subiu com sucessinhos!
        Acesse por meio de http://localhost:${port}
    `)
})




// 1- Abre o vs code
// 2- Cria a pasta js35 no desktop
// 3- abre a pasta dentro do editor :)

