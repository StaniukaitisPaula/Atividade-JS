const imparOuPar = function(numeroInicial, numeroFinal, somaTotal) {
    let valorInicial = numeroInicial
    let valorFinal = numeroFinal
    let soma = somaTotal

    if (soma == 'PAR') {
        console.log(`---------------${numeroSolicitado}---------------`)
        while (valorInicial <= valorFinal) {
            resultado = valorInicial % 2
            if (resultado == 0) {
                console.log(`${valorInicial}`)
            }
            valorInicial++
        }
    } else if (soma == 'IMPAR') {
        console.log(`---------------${numeroSolicitado}---------------`)
        while (valorInicial <= valorFinal) {
            resultado = valorInicial % 2
            if (resultado != 0) {
                console.log(`${valorInicial}`)
            }
            valorInicial++
        }
    }
}
module.exports = {
    imparOuPar
}