const imparOuPar = function(numeroInicial, numeroFinal, somaTotal) {
    let valorInicial = numeroInicial
    let valorFinal = numeroFinal
    let soma = somaTotal
    let contador
    let contadorPar = 0
    let contadorImpar = 0

    if (soma == 'PAR') {
        console.log(`---------------${soma}---------------`)

        while (valorInicial <= valorFinal) {
            resultado = valorInicial % 2
            if (resultado == 0) {
                console.log(`${valorInicial}`)
                    contadorPar++
            }
            valorInicial++
        }
        console.log('---------------QUANTIDADES----------------')
        console.log('PARES: ' + contadorPar)
        
    } else if (soma == 'IMPAR') {
        console.log(`---------------${soma}---------------`)

        while (valorInicial <= valorFinal) {
            resultado = valorInicial % 2
            if (resultado != 0) {
                console.log(`${valorInicial}`)
                    contadorImpar++
            }
            valorInicial++
        }
        console.log('---------------QUATIDADES----------------')
        console.log('IMPARES: ' + contadorImpar)

    } else if (soma == 'AMBOS') {
        contador = valorInicial
        console.log(`---------------PAR---------------`)
        while (contador <= valorFinal) {
            resultado = contador % 2
            if (resultado == 0) {
                console.log(`${contador}`)
                contadorPar++
            }
            contador++
        }

        }else if (soma == 'AMBOS2') {
            contador = valorInicial
            while (contador <= valorFinal) {
                resultado = contador % 2
                if (resultado == 0) {
                    console.log(`${contador}`)
                    contadorImpar++
                }
                contador++
        }
        console.log('---------------QUANTIDADES----------------')
        console.log('PARES: ' + contadorPar)
        console.log('IMPARES: ' + contadorImpar)

        }
}

module.exports = {
    imparOuPar
}