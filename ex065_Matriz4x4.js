var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`       ex065_Matriz4x4`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function getRandomIntInclusive(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function criarMatriz(nLinha, nColuna){
  let matriz = []
  let array = []

  for(let linha = 0; linha < nLinha; linha++){
    for(let coluna = 0; coluna < nColuna; coluna++){
      array.push(input.question(`Digite valor [${linha}][${coluna}]: `))
      // array.push(getRandomIntInclusive(10, 99))
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

function somaDiagonalPrincipal(matriz){
  let somaValores = 0
  for(let linha = 0; linha < matriz.length; linha++){
    for(let coluna = 0; coluna < matriz.length; coluna++){
      if(linha == coluna){
        somaValores += Number(matriz[linha][coluna])
      }
    }
  }
  return somaValores
}

function produtoSegundaLinha(matriz){
  let produtoValores = 1

  for(let linha = 0; linha < matriz.length; linha++){
    for(let coluna = 0; coluna < matriz.length; coluna++){
      if(linha == 1){
        produtoValores *= Number(matriz[linha][coluna])
      }
    }
  }

  return produtoValores
}

function maiorValorTerceiraColuna(matriz){
  let maiorValor = 0

  for(let linha = 0; linha < matriz.length; linha++){
    for(let coluna = 0; coluna < matriz.length; coluna++){
      if(coluna == 2){
        if(maiorValor < Number(matriz[linha][coluna])){
          maiorValor = Number(matriz[linha][coluna])
        }
      }
    }
  }

  return maiorValor
}

//declaração de variáveis
let matriz4x4 = []
const NUMERO_DE_LINHAS = 4
const NUMERO_DE_COLUNAS = 4
let somaDaDiagonalPrincipal = 0
let produtoDaSegundaLinha = 0
let maiorValorDaTerceiraLinha = 0

//entrada dos dados
cabecalho()
matriz4x4 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)

//processamento dos dados
somaDaDiagonalPrincipal = somaDiagonalPrincipal(matriz4x4)
produtoDaSegundaLinha = produtoSegundaLinha(matriz4x4)
maiorValorDaTerceiraLinha = maiorValorTerceiraColuna(matriz4x4)

//saída dos dados
console.clear()
cabecalho()
mostrarMatriz(matriz4x4)
rodape()
console.log(`Soma da diagonal principal: ${somaDaDiagonalPrincipal}`)
console.log(`Produto da segunda linha: ${produtoDaSegundaLinha}`)
console.log(`Maior valor da terceira coluna: ${maiorValorDaTerceiraLinha}`)
rodape()