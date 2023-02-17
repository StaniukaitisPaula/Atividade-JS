/**************************** 
 * Objetivo: Criar um sistema que gerencie as médias escolares
 * DATA: 10/02/2023
 * Autor: Paula
 * Versao: 1.0
 ******************************/

const calcular = function(notaUm, notaDois, notaTres, notaQuatro) {

    let nota1 = Number(notaUm)
    let nota2 = Number(notaDois)
    let nota3 = Number(notaTres)
    let nota4 = Number(notaQuatro)

    let media = (nota1 + nota2 + nota3 + nota4) / 4
    return media
}

const exame = function(media, exameNota) {

    let exameMedia = Number(media)
    let notaExame = Number(exameNota)

    let somaFinal = (exameMedia + notaExame) / 2
    return somaFinal

}



//exporta uma funçao para ser utilizada em outro arquivo 
module.exports = {
    calcular,
    exame
}