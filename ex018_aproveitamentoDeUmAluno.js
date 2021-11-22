var input = require('readline-sync')
console.log('=================================')
console.log('  ex018_aproveitamentoDeUmAluno  ')
console.log('=================================')

const notaA = Number(input.question("Digite a 1ª nota: "))
const notaB = Number(input.question("Digite a 2ª nota: "))
let aproveitamento = ``

const media = ((notaA + notaB) / 2)

if(media >= 9) {
  aproveitamento = `A`
} else if (media >= 7) {
  aproveitamento = `B`
} else if (media >= 5) {
  aproveitamento = `C`
} else if (media >= 3) {
  aproveitamento = `D`
} else if (media >= 1) {
  aproveitamento = `E`
} else {
  aproveitamento = `F`
}

console.clear()
console.log('=================================')
console.log('  ex018_aproveitamentoDeUmAluno  ')
console.log('=================================')
console.log(`Media do aluno: ${media}`)
console.log(`Aproveitamento: ${aproveitamento}`)
console.log('=================================')