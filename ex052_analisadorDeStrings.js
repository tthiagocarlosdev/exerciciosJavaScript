var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`   ex052_analisadorDeStrings`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

//declaração de variáveis
let nome = ""

//entrada de dados
cabecalho()
nome = String(input.question(`Digite o seu nome: `))

//processamento saída de dados
rodape()
console.log(`Seu nome tem ${nome.replace(/ /g, "").length} letras.`)
console.log(`Seu nome em maiúsculo: ${nome.toUpperCase()}`)
console.log(`Seu nome em minúsculo: ${nome.toLowerCase()}`)
console.log(`A primeira letra do seu nome é: ${nome.charAt()}`)
console.log(`A última letra do seu nome é : ${nome.charAt(nome.length - 1)}`)
console.log(`A posição da letra 'a' é: ${nome.indexOf("a")}`)
console.log(`O código ascii da letra 'a' é: ${nome.charCodeAt(nome.indexOf("a"))}`)
console.log(`O código ascii 65 corresponde a: ${String.fromCharCode(65)}`)
rodape()