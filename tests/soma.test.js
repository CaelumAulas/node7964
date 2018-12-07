const soma = require('../modulos/soma')
// Test Driven Developemnt 
// TDD

console.log('[soma.js]')
if(soma(1,1) === 2) {
    console.log('1 + 1 deve ser 2')
} else {
    console.log('Deu ruim')
}

if(soma(2,2) === 4) {
    console.log('2 + 2 deve ser 4')
} else {
    console.log('Deu ruim')
}