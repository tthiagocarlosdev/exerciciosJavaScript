var input = require('readline-sync')
console.log('================================')
console.log('        ex016_calculoImc        ')
console.log('================================')

const peso = Number(input.question('Digite seu peso(kg): '))
const estatura = Number(input.question('Digite sua estatura(m): '))
let status = ``

const imc = (peso / (estatura * estatura))

if (imc < 17) {
    status = 'MUITO ABAIXO DO PESO'
} else if (imc < 18.5) {
    status = `ABAIXO DO PESO`
} else if (imc < 25) {
    status = `PESO IDEAL`
} else if (imc < 30) {
    status = `SOBREPESO`
} else if (imc < 35) {
    status = `OBESIDADE`
} else if (imc < 40) {
    status = `OBESIDADE SEVERA`
} else {
    status = `OBESIDADE MORBIDA`
}

console.clear()
console.log('================================')
console.log('        ex016_calculoImc        ')
console.log('================================')
console.log(`Seu IMC é igual a ${imc.toFixed(2)}`)
console.log(`STATUS: ${status}!`)
console.log('================================')