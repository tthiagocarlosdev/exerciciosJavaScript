var input = require('readline-sync')
console.log('====================')
console.log('  ex012_calculoImc  ')
console.log('====================')
const peso = Number(input.question('Digite o seu peso (kg): '))
const altura = Number(input.question('Digite a sua altura (m): '))
console.clear()
console.log('====================')
console.log('  ex012_calculoImc  ')
console.log('====================')
const IMC = (peso / (altura * altura)).toFixed(2)
console.log(`Seu IMC é igual a ${IMC}`)
if(IMC >= 18.5 && IMC <= 25){
  console.log(`Seu peso está ideal!`)
} else {
  console.log(`Seu peso está fora do ideal!`)
}
console.log('====================')