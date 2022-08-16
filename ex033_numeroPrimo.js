var input = require('readline-sync')

console.log(`------------------------------`)
console.log(`       ex033_numeroPrimo`)
console.log(`------------------------------`)

let numero = Number(input.question(`Digite um número: `))
let contador = numero
let ehPrimo = 0

do{

  if(numero % contador == 0){
    ehPrimo++
  }

  contador--

}while(contador > 0)

console.clear()
console.log(`------------------------------`)
console.log(`       ex033_numeroPrimo`)
console.log(`------------------------------`)

if(ehPrimo == 2){
  console.log(`O número ${numero} é Primo!`)
}else{
  console.log(`O número ${numero} não é Primo!`)
}
console.log(`------------------------------`)
