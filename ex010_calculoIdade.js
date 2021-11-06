var input = require('readline-sync')
console.log('====================')
console.log(' ex010_calculoIdade ')
console.log('====================')
var agora = new Date()
var anoAtual = agora.getFullYear()
var anoNascimento = Number(input.question('Digite seu ano de nascimento: '))
var idade = anoAtual - anoNascimento
var resultadoFinal = ``
console.clear()
console.log('====================')
console.log(' ex010_calculoIdade ')
console.log('====================')
resultadoFinal = `Sua idade é ${idade} anos `
if(idade >= 18){
  resultadoFinal += `e você atigiu a maioridade!`
}
console.log(resultadoFinal)
console.log('====================')