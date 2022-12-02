var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`       ex067_JogoDaVelha`)
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
      array.push(`${contador}`)
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

function jogar(simbolo, numero){
  let mudou = false
  for(let linha = 0; linha < NUMERO_DE_LINHAS; linha++){
    for(let coluna = 0; coluna < NUMERO_DE_COLUNAS; coluna++){
      if( matriz3x3[linha][coluna] == numero){
        matriz3x3[linha][coluna] = simbolo
        mudou = true
      }
    }
  }
  return mudou
}

function mudarJogador(){
  if( simbolo == `X`){
    simbolo = `O`
  } else {
    simbolo = `X`
  }
}

function terminouVelha(){
  let terminou = false
  let ocorrencia = 0

  //jogos em linha
  for(let linha = 0; linha < NUMERO_DE_LINHAS; linha++){
    if(matriz3x3[linha][0] == matriz3x3[linha][1] && matriz3x3[linha][1] == matriz3x3[linha][2]){
      terminou = true
    }
  }

  //jogos em coluna
  for(let coluna = 0; coluna < NUMERO_DE_LINHAS; coluna++){
    if(matriz3x3[0][coluna] == matriz3x3[1][coluna] && matriz3x3[1][coluna] == matriz3x3[2][coluna]){
      terminou = true
    }
  }

  //jogos em diagonal
  if(matriz3x3[0][0] == matriz3x3[1][1] && matriz3x3[1][1] == matriz3x3[2][2]){
    terminou = true
  }

  if(matriz3x3[0][2] == matriz3x3[1][1] && matriz3x3[1][1] == matriz3x3[2][0]){
    terminou = true
  }

  //jogo em velha
  for(let linha = 0; linha < NUMERO_DE_LINHAS; linha++){
    for(let coluna = 0; coluna < NUMERO_DE_COLUNAS; coluna++){
      if( matriz3x3[linha][coluna] != `X` && matriz3x3[linha][coluna] != `O`){
        ocorrencia++
      }
    }
  }

  if(ocorrencia == 0){
    terminou = true
  }

  //retorna se o jogo acabou ou não
  return terminou
}

//declaração de variáveis
let matriz3x3 = []
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 3
let simbolo = `X`
let posicao = 0
let resposta = false

//entrada de dados
matriz3x3 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)

//processamento saída de dados
cabecalho()
mostrarMatriz(matriz3x3)
do {
  do {
    posicao = input.question(`Vai jogar [${simbolo}] em qual posição? `)
    resposta = jogar(simbolo, posicao)
    if( resposta == false ){
      console.log(`JOGADA INVÁLIDA!`)
    }
  } while ( resposta == false )
  mudarJogador()
  console.clear()
  cabecalho()
  mostrarMatriz(matriz3x3)
} while ( terminouVelha() == false )
rodape()
console.log(`JOGO FINALIZADO!`)
rodape()