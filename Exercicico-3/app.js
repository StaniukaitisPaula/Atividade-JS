//import
var imparOuPar = require('./modulo/imparOuPar.js')

//
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('-------IMPAR OU PAR --------')

entradaDados.question('Digite o primeiro Número Inicial  [ entre 0 - 500 ]: \n', function(numeroInicial) {
    let valorInicial = numeroInicial

    entradaDados.question('Digite o segundo Número Final [ entre 100 - 1000]: \n', function(numeroFinal) {
        let valorFinal = numeroFinal

        entradaDados.question('Escolha entre IMPAR ou PAR: \n', function(solicitado) {
            let Solicitacao = solicitado.toUpperCase

            resultado = calculo.imparOuPar(valorInicial, valorFinal, solicitacao)
        })
    })
})