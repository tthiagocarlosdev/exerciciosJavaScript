var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`        ex062_matriz3x2`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function criarMatriz(nLinha, nColuna){
  let matriz = []
  let array = []

  for(let i = 0; i < nLinha; i++){
    for(let j = 0; j < nColuna; j++){
      array.push(input.question(`Digite um valor: `))
    }
    matriz.push(array)
    array = []
  }
 return matriz
}

function motrarMatriz(matriz){
  for(let c = 0; c < matriz.length; c++){
    console.log(matriz[c])
  }
}

//declaração de variáveis
let matriz3x2 = []
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 2

//entrada de dados
cabecalho()
matriz3x2 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)

//processamento e saída de dados
console.clear()
cabecalho()
motrarMatriz(matriz3x2)
rodape()