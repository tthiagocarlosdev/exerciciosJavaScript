var input = require('readline-sync')

//declaração de procedimento
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`    ex035_escolhendoPessoas`)
  console.log(`------------------------------`)
}

let totalHomem = 0
let totalMulher = 0
let sexo = 0
let idade = 0
let cutis = 0
let cadastro = ""

do {

  console.clear()
  cabecalho()
  console.log(`Sexo: `)
  console.log(`[1] Homem`)
  console.log(`[2] Mulher`)
  sexo = Number(input.question(''))

  console.clear()
  cabecalho()
  idade = Number(input.question('Digite a idade: '))

  console.clear()
  cabecalho()
  console.log(`Cor cútis: `)
  console.log(`[1] Preto`)
  console.log(`[2] Castanho`)
  console.log(`[3] Loiro`)
  console.log(`[4] Ruivo`)
  cutis = Number(input.question(''))

  console.log(`Cadastrar mais alguém?`)
  cadastro = String(input.question(`[s] sim / [n] não\n`))

  switch (sexo) {
    case 1:
      if(idade >= 18 && cutis == 2){
        totalHomem++
      }
    break;
  
    case 2:
      if(idade >= 25 && idade <= 30 && cutis == 3){
        totalMulher++
      }  
    break;
  }
} while ( cadastro == 's' )

console.clear()
cabecalho()
console.log(`Total de homens com mais de 18 anos e cabelos castanhos é ${totalHomem}.`)
console.log(`Total de mulheres entre 25 e 30 anos e cabelos loiros é ${totalMulher}.`)

console.log(`------------------------------`)