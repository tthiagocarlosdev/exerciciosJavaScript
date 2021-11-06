var input = require('readline-sync')
console.log('====================')
console.log('  ex011_parOuImpar  ')
console.log('====================')
const numero = Number(input.question("Digite um número: "))
if(numero % 2 == 0){
  console.log(`${numero} é PAR!`)
} else {
  console.log(`${numero} é IMPAR!`)
}
console.log('====================')