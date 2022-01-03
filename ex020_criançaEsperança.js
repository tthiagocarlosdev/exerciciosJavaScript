var input = require('readline-sync')
console.log("=========================")
console.log("    CRIANÇA ESPERANÇA    ")
console.log("=========================")
console.log("Muito obrigado por ajudar!")
console.log("[1] para doar R$10,00")
console.log("[2] para doar R$25,00")
console.log("[3] para doar R$50,00")
console.log("[4] para doar outros valores")
console.log("[5] para cancelar!")
let opcao = Number(input.question("Escolha uma opção: "))
let doacao = 0
console.clear()
switch(opcao) {
  case 1:
    doacao = 10
    break;
  case 2:
    doacao = 25
    break;
  case 3:
    doacao = 50
    break;
  case 4:
    doacao = Number(input.question("Digite o valor da doação: R$"))
    break;
  case 5:
    doacao = 0
    break;
  default:
    console.log("Sua doação será considerada R$0,00")
    break;
}
console.log("=========================")
console.log("    CRIANÇA ESPERANÇA    ")
console.log("=========================")
console.log("Muito obrigado por sua doação!")
console.log(`Sua doação foi ${doacao.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}}`)
console.log("=========================")