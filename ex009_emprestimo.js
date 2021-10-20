var input = require('readline-sync')
console.log('============')
console.log(' EMPRÉSTIMO ')
console.log('============')
const emprestimo = Number(input.question('Informe o valor do empréstimo: R$'))
const parcelas = Number(input.question('Informe a quantidade de parcelas: '))
console.clear()
console.log('============')
console.log(' EMPRÉSTIMO ')
console.log('============')
console.log(
  `Você pagará ${parcelas} parcelas de R$${(
    (emprestimo + emprestimo * 0.2) /
    parcelas
  ).toFixed(2)}`
)
