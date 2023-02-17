const imparOuPar = function(numeroInicial, numeroFinal, solicitado) {
    let valorInicial = numeroInicial
    let valorFinal = numeroFinal
    let Solicitacao = solicitado.toUpperCase()

    if (tipoSolicitado == 'PAR') {
        console.log(`---------------${numeroSolicitado}---------------`)
        while (valorInicial <= valorFinal) {
            resultado = valorInicial % 2
            if (resultado == 0) {
                console.log(`${valorInicial}`)
            }
            valorInicial++
        }
    } else if (tipoSolicitado == 'IMPAR') {
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