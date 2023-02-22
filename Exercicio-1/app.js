/**************************** 
 * Objetivo: Criar um sistema que gerencie as médias escolares
 * DATA: 10/02/2023
 * Autor: Paula
 * Versao: 1.0
 ******************************/

console.log('----------Média Escolar---------\n')
console.log('Preencha os dados abaixo:\n')

//Import
var calculo = require('./modulo/Calculo.js')

//Import da biblioteca para entrada de dados
var readline = require('readline')

//criar um objeto 
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


//funçao de callback
entradaDados.question('Nome do Aluno(a): \n', function(nome) {
    let aluno = nome.toUpperCase()

    entradaDados.question('Nome do(a) Professor(a): \n', function(nomeProfessor) {
        let professor = nomeProfessor.toUpperCase()


        entradaDados.question('Digite o Sexo do(a) aluno(a): \n', function(sexoA) {
            let sexoAluno = sexoA.toUpperCase()


            entradaDados.question('Digite o Sexo do(a) Professor(a): \n', function(sexoP) {
                let sexoProf = sexoP.toUpperCase()



                entradaDados.question('Nome do Curso: \n', function(cursoAdd) {
                    let curso = cursoAdd.toUpperCase()


                    entradaDados.question('Nome da Disciplina: \n', function(disciplinas) {
                        let disciplina = disciplinas.toUpperCase()



                        entradaDados.question('Digite a nota 1: \n', function(notaUm) {
                            let nota1 = notaUm;


                            entradaDados.question('Digite a nota 2 : \n', function(notaDois) {
                                let nota2 = notaDois.replace(',', '.')


                                entradaDados.question('Digite a nota 3: \n', function(notaTres) {
                                    let nota3 = notaTres.replace(',', '.')


                                    entradaDados.question('Digite a nota 4: \n', function(notaQuatro) {
                                        let nota4 = notaQuatro.replace(',', '.')

                                        let resultado = calculo.exame(nota1, nota2, nota3, nota4)

                                        if (sexoAluno != 'FEMININO' && sexoProf != 'FEMININO' &&
                                            sexoAluno != 'MASCULINO' && sexoProf != 'MASCULINO') {

                                            console.log('ERRO: Digite apenas masculino ou feminino !!')
                                            entradaDados.close()
                                        }
                                        if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ||
                                            aluno == '' || professor == '' || sexoAluno == '' || sexoProf == '' ||
                                            curso == '' || disciplina == '') {

                                            console.log('ERRO: É necessário preencher todos os valores')
                                            entradaDados.close()

                                        } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                                            console.log('ERRO: O texto digitado não é um número!!')
                                            entradaDados.close()

                                        } else if  (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 ||
                                            nota3 > 100 || nota4 < 0 || nota4 > 100) {

                                            console.log('ERRO: O Sistema aceita somente números entre 0 - 100')
                                            entradaDados.close()

                                        } else {


                                        if (resultado >= 70) {
                                            console.log('Relatório do Aluno')

                                            if (sexoAluno == 'FEMININO')
                                                console.log(`A aluna ${aluno} foi APROVADA! na disciplina ${disciplina}.`)
                                            else
                                                console.log(`O aluno ${aluno} foi APROVADO! na disciplina ${disciplina}.`)
                                            console.log(`Curso: ${curso}`)
                                            if (sexoProf == 'FEMININO')
                                                console.log(`Professora: ${professor}`)
                                            else
                                                console.log(`Professor: ${professor}`)
                                            console.log(`Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}`)
                                            console.log(`Nota Final: ${resultado}`)
                                            entradaDados.close()

                                        }

                                        if (resultado <= 49) {
                                            console.log('Relatório do Aluno')

                                            if (sexoAluno == 'FEMININO')
                                                console.log(`A aluna ${aluno} foi REPROVADA! na disciplina ${disciplina}.`)
                                            else
                                                console.log(`O aluno ${aluno} foi REPROVADO! na disciplina ${disciplina}.`)
                                            console.log(`Curso: ${curso}`)
                                            if (sexoProf == 'FEMININO')
                                                console.log(`Professora: ${professor}`)
                                            else
                                                console.log(`Professor: ${professor}`)
                                            console.log(`Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}`)
                                            console.log(`Nota Final: ${resultado}`)
                                            entradaDados.close()

                                        }
                                        if (resultado <= 69 && resultado >= 50) {
                                            entradaDados.question('Digite a nota do exame:\n', function(exameNota) {

                                                let notaExame = exameNota
                                                let resultadoEx = calculo.exame(notaExame, resultado)

                                                if (resultadoEx == '' || resultadoEx < 0 || resultadoEx > 100 || isNaN(resultadoEx)) {
                                                    console.log('ERRO: Digite um número entre 0 - 100!')
                                                    entradaDados.close()

                                                } else {
                                                    if (resultadoEx <= 50) {
                                                        console.log('Relatório do Aluno \n')

                                                        if (sexoAluno == 'FEMININO')
                                                            console.log(`A aluna ${aluno} foi REPROVADO! pelo exame na disciplina ${disciplina}.`)
                                                        else
                                                            console.log(`O aluno ${aluno} foi REPROVADO! pelo exame na disciplina ${disciplina}.`)
                                                        console.log(`Curso: ${curso}`)

                                                        if (sexoProf == 'FEMININO')
                                                            console.log(`Professora: ${professor}\n`)
                                                        else
                                                            console.log(`Professor: ${professor}\n`)
                                                        console.log(`Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}, Exame: ${notaExame}\n`)
                                                        console.log(`Nota Final: ${resultado}`)
                                                        console.log(`Nota final com Exame: ${resultadoEx}`)
                                                        entradaDados.close()

                                                    } else {
                                                        console.log('Relatório do Aluno\n')

                                                        if (sexoAluno == 'FEMININO')
                                                            console.log(`A aluna ${aluno} foi APROVADA! pelo exame na disciplina ${disciplina}.`)
                                                        else
                                                            console.log(`O aluno ${aluno} foi APROVADO! pelo exame na disciplina ${disciplina}.`)
                                                        console.log(`Curso: ${curso}\n`)

                                                        if (sexoProf == 'FEMININO')
                                                            console.log(`Professora: ${professor}\n`)
                                                        else
                                                            console.log(`Professor: ${professor}\n`)
                                                        console.log(`Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}, Exame: ${notaExame}\n`)
                                                        console.log(`Nota Final: ${resultado}`)
                                                        console.log(`Nota final com Exame: ${resultadoEx}`)
                                                        entradaDados.close()

                                                      }
                                                 }
                                             })
                                            }
                                       }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})