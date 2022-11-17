//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`   ex064_MatrizIdentidade3x3`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function criarMatrizIdentidade(nLinha, nColuna){
  let matriz = []
  let array = []

  for(let linha = 0; linha < nLinha; linha++){
    for(let coluna = 0; coluna < nColuna; coluna++){
      if(linha == coluna){
        array.push(1)
      } else {
        array.push(0)
      }
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
let matrizIdentidade = []
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 3

//processamento de dados
matrizIdentidade = criarMatrizIdentidade(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)

//saída de dados
cabecalho()
mostrarMatriz(matrizIdentidade)
rodape()