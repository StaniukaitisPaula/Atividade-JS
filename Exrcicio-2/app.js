//import
var calculo = require('./modulo/tabuada.js')


//
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('-------TABUADA--------')

entradaDados.question('Digite o primeiro Número multiplicado [ entre 2 - 100 ]: \n', function(multiplicandoInicial) {

    let tabuadaInicial = Number(multiplicandoInicial)

    entradaDados.question('Digite o segundo Número multiplicado [ entre 2 - 100 ]: \n', function(multiplicandoFinal) {
        let tabuadaFinal = Number(multiplicandoFinal)

        if (tabuadaInicial == '' || tabuadaFinal == '') {
            console.log('ERRO: É necessário preencher todos os valores!')
            entradaDados.close()


        } else if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal)) {
            console.log('ERRO: O texto digitado não é um número!')
            entradaDados.close()

        } else if (tabuadaInicial < 2 || tabuadaFinal < 2) {
            console.log('ERRO: O Sistema Não aceita  números menores que 2')
            entradaDados.close()

        } else if (tabuadaInicial > 100 || tabuadaFinal > 100) {
            console.log('ERRO: O Sistema Não aceita  números maiores que 100')
            entradaDados.close()
        } else {
            entradaDados.question('Digite o Número inicial que deseja multiplicar [ entre 1 - 50 ]: \n', function(minimoMultiplicador) {
                let miniMultiplicador = Number(minimoMultiplicador)

                entradaDados.question('Digite o Número final que deseja multiplicar  [ entre 1 - 50 ]: \n', function(maximoMultiplicador) {
                    let maxMultiplicador = Number(maximoMultiplicador)

                    if (miniMultiplicador < 1 || maxMultiplicador < 1) {
                        console.log('ERRO: não é permitido valore menores que 1 ')
                        entradaDados.close()

                    } else if (miniMultiplicador > 50 || maxMultiplicador > 50) {
                        console.log('ERRO: não é permitido valores maiores que 50')
                        entradaDados.close()

                    } else {
                        resultado = calculo.tabuadaM(tabuadaInicial, tabuadaFinal, maxMultiplicador, miniMultiplicador)
                        entradaDados.close()
                    }


                })
            })
        }
    })
})