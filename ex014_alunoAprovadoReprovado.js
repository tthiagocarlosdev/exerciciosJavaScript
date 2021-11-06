var input = require('readline-sync')
console.log('================================')
console.log('  ex014_alunoAprovadoReprovado  ')
console.log('================================')
const notaA = Number(input.question("Digite a 1ª nota: "))
const notaB = Number(input.question("Digite a 2ª nota: "))
let resultadoFinal = ``

const media = ((notaA + notaB) / 2 )
if(media >= 7){
  resultadoFinal = `Aluno Aprovado!`
} else {
  resultadoFinal = `Aluno Reprovado!`
}
console.clear()
console.log('================================')
console.log('  ex014_alunoAprovadoReprovado  ')
console.log('================================')
console.log(`Média do aluno: ${media}`)
console.log(resultadoFinal)
console.log('================================')