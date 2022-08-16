var input = require('readline-sync')

console.log(`------------------------------`)
console.log(`      ex034_superContador`)
console.log(`------------------------------`)

console.log(`Escolha: `)
console.log(`[1] contar de 0 a 10`)
console.log(`[2] contar de 10 a 0`)
console.log(`[3] cancelar`)

let opcao = Number(input.question(``))

console.clear()
console.log(`------------------------------`)
console.log(`      ex034_superContador`)
console.log(`------------------------------`)

switch (opcao) {
  case 1:
    contador = 0
    do {
      console.log(`${contador}`)
      contador++
    } while (contador <= 10)
  break
  case 2:
    contador = 10
    do {
      console.log(`${contador}`)
      contador--
    } while (contador >= 0)
  break
  case 3:
    console.log(`PROGRAMA CANCELADO!`)
  break
  default:
    console.log(`Opção Inválida!`)
}
console.log(`------------------------------`)