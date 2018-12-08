const chai = require('chai')
const expect = chai.expect
const soma = require('../../modulos/soma')
// Framework de testes: Pra ficar mais bonito
// Lib pra fazer as validações

// 1- npm install mocha chai

describe('# soma.js', () => {
    it('1 + 1 tem que ser igual a 2', () => {
        expect(soma(1,1)).to.be.equal(2)
    })
    it('2 + 2 tem que ser igual a 4', () => {
        expect(soma(2,2)).to.be.equal(4)
    }) // lembrar de usar o .only se quiser rodar só um teste
})

// console.log('[soma.js]')
// if(soma(1,1) === 2) {
//     console.log('1 + 1 deve ser 2')
// } else {
//     console.log('Deu ruim')
// }

// if(soma(2,2) === 4) {
//     console.log('2 + 2 deve ser 4')
// } else {
//     console.log('Deu ruim')
// }