var input = require('readline-sync')
console.log('======================')
console.log('  ex013_aptoCarteira  ')
console.log('======================')
const agora = new Date()
const anoAtual = agora.getFullYear()
const anoNascimento = Number(input.question('Digite seu ano de nascimento: '))
const idade = anoAtual - anoNascimento
console.clear()
console.log('======================')
console.log('  ex013_aptoCarteira  ')
console.log('======================')
console.log(`Sua idade é ${idade} anos!`)
if(idade >= 18){
  console.log('Apto a tirar a carteira!')
} else {
  console.log('Inapto a tirar a carteira!')
}
console.log('======================')