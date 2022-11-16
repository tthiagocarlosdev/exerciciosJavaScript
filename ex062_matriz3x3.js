var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`        ex062_matriz3x3`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function criarMatriz(nLinha, nColuna){
  let matriz = []
  let array = []
  let contador = 1

  for(let linha = 0; linha < nLinha; linha++){
    for(let coluna = 0; coluna < nColuna; coluna++){
      array.push(input.question(`Digite ${contador}º valor: `))
      contador++
    }
    matriz.push(array)
    array = []
  }
  return matriz
}

function mostrarMatriz(matriz){
  for(let contador = 0; contador < matriz.length; contador++){
    console.log(matriz[contador])
  }
}

//declaração de variáveis
let matriz3x3 = []
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 3

//entrada de dados
cabecalho()
matriz3x3 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)

//processamento e saída de dados
console.clear()
cabecalho()
mostrarMatriz(matriz3x3)
rodape()