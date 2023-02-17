const tabuadaM = function(multiplicandoInicial, multiplicandoFinal, somaFinal, somaInicial) {

    let resultado
    let tabuadaInicial = Number(multiplicandoInicial)
    let tabuadaFinal = Number(multiplicandoFinal)
    let soma = somaInicial
    let soma2 = somaFinal

    while (tabuadaInicial <= tabuadaFinal) {
        console.log(`\n------- Tabuada do ${tabuadaInicial} -------\n`)

        soma = somaInicial
        while (soma <= soma2) {
            resultado = tabuadaInicial * soma

            console.log(`${tabuadaInicial} x ${soma} = ${resultado}`)
            soma++
        }
        tabuadaInicial++

    }

}
module.exports = {
    tabuadaM
}