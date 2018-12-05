// 1 - Sempre busca um módulo nativo
// 2 - Olhar os módulos da node_modules
// 3/ex - Sempre que for um arquivo do seu projeto use ./
const pudimComBatata = require('./app')

const port = 3000
pudimComBatata.listen(port, function() {
    console.log(`
        Servidor subiu com sucessinhos!
        Acesse por meio de http://localhost:${port}
    `)
})