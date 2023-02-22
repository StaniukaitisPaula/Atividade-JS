//import
var calculo = require('./modulo/imparOuPar.js')

//
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('-------IMPAR OU PAR --------')

entradaDados.question('Digite o primeiro Número Inicial  [ entre 0 - 500 ]: \n', function(numeroInicial) {
    let valorInicial = numeroInicial

    if (valorInicial < 0 || valorInicial > 500 || isNaN(valorInicial) || valorInicial === '') {
        
        console.log('ERRO: Digite apenas NÚMEROS entre [ 0 - 500 ]')
        entradaDados.close()

    } else {
        entradaDados.question('Digite o valor final [ENTRE 100 - 1000]:\n', function(valorFim) {

            let valorFinal = (valorFim)

            if (valorFinal < 100 || valorFinal > 1000 || valorFinal == '' || isNaN(valorFinal)) {
                console.log('ERRO: Digite apenas NÚMEROS entre [ 100 - 1000 ]')
                entradaDados.close()

            } else if (valorInicial == valorFinal) {
                console.log('ERRO: O núumero INICIAL não pode ser IGUAL ao FINAL !!')
                entradaDados.close()

            } else if (valorInicial > valorFinal) {
                console.log('ERRO: O número iNICIAL  não pode ser MAIOR que o FINAL !!')
                entradaDados.close()

            } else {
                entradaDados.question('Você deseja calcular como? \n[IMPAR] [PAR] [AMBOS]: ',
                    function(escolha) {
                        let escolhas = escolha.toUpperCase()
                        if (escolhas == '') {
                            console.log('ERRO: não é possível localizar os impares e pares a escolha.')
                            entradaDados.close()
                        } else if (escolhas != 'IMPAR' && escolhas!= 'PAR' && escolhas!= 'AMBOS') {

                            console.log('ERRO: escolha inválida, digite apenas [IMPAR] [PAR] [AMBOS]')
                            entradaDados.close()
                        } else { 
                            calculo.imparOuPar(valorInicial, valorFinal, escolhas)
                            entradaDados.close()  

                      }
                 })
             }
        })
     }
})

