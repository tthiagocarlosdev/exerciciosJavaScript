var input = require('readline-sync')
console.log('================================')
console.log('  ex015_alunoAprovadoReprovado  ')
console.log('================================')
const notaA = Number(input.question('Digite a 1ª nota: '))
const notaB = Number(input.question('Digite a 2ª nota: '))

console.clear()
console.log('================================')
console.log('  ex015_alunoAprovadoReprovado  ')
console.log('================================')

const media = ((notaA + notaB) / 2)
console.log(`Media do aluno: ${media}`)

if(media >= 7){
  console.log('Aluno Aprovado!')
} else if (media >= 5) {
  console.log('Aluno em recuperação!')
} else {
  console.log('Aluno reprovado!')
}

console.log('================================')