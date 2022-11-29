var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`    ex066_dissecandoMatriz`)
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
            // array.push(input.question(`Digite o valor [${linha}][${coluna}]: `))
            array.push(getRandomIntInclusive(10, 99))
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

function menu(){
    console.log(`Escolha: `)
    console.log(`[1] Matriz completa`)
    console.log(`[2] Diagonal Esquerda-Direita`)
    console.log(`[3] Triângulo Superior Direito`)
    console.log(`[4] Triângulo Inferior Esquerdo`)
    console.log(`[5] Diagonal Direita-Esquerda`)
    console.log(`[6] Triângulo Inferior Direito`)
    console.log(`[7] Triângulo Superior Esquerdo`)
    console.log(`[8] Gerar outra matriz`)
    console.log(`[9] Encerrar Programa`)
}

//delaração de variáveis
let matriz4x4 = []
const NUMERO_DE_LINHAS = 4
const NUMERO_DE_COLUNAS = 4
let escolha = 0

//entrada de dados
cabecalho()
matriz4x4 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)
console.clear()

// Processamento e saída de dados
do {
    cabecalho()
    menu()
    escolha = Number(input.question())
    console.clear()
    cabecalho()

    let novaMatriz = []
    let novoArray = []

    switch (escolha) {
        case 1:
            mostrarMatriz(matriz4x4)
        break;
        case 2:
            for(let linha = 0; linha < matriz4x4.length; linha++){
                for(let coluna = 0; coluna < matriz4x4.length; coluna++){
                    if( linha == coluna ){
                        novoArray.push(matriz4x4[linha][coluna])
                    } else {
                        novoArray.push(``)
                    }
                }
                novaMatriz.push(novoArray)
                novoArray = []
            }
            mostrarMatriz(novaMatriz)
        break;
        case 3:
            for(let linha = 0; linha < matriz4x4.length; linha++){
                for(let coluna = 0; coluna < matriz4x4.length; coluna++){
                    if( coluna > linha ){
                        novoArray.push(matriz4x4[linha][coluna])
                    } else {
                        novoArray.push(``)
                    }
                }
                novaMatriz.push(novoArray)
                novoArray = []
            }
            mostrarMatriz(novaMatriz)
        break;
        case 4:
            for(let linha = 0; linha < matriz4x4.length; linha++){
                for(let coluna = 0; coluna < matriz4x4.length; coluna++){
                    if( linha > coluna ){
                        novoArray.push(matriz4x4[linha][coluna])
                    } else {
                        novoArray.push(``)
                    }
                }
                novaMatriz.push(novoArray)
                novoArray = []
            }
            mostrarMatriz(novaMatriz)
        break;
        case 5:
            for(let linha = 0; linha < matriz4x4.length; linha++){
                for(let coluna = 0; coluna < matriz4x4.length; coluna++){
                    if( linha + coluna == matriz4x4.length - 1 ){
                        novoArray.push(matriz4x4[linha][coluna])
                    } else {
                        novoArray.push(``)
                    }
                }
                novaMatriz.push(novoArray)
                novoArray = []
            }
            mostrarMatriz(novaMatriz)
        break;
        case 6:
            for(let linha = 0; linha < matriz4x4.length; linha++){
                for(let coluna = 0; coluna < matriz4x4.length; coluna++){
                    if( linha + coluna >= matriz4x4.length ){
                        novoArray.push(matriz4x4[linha][coluna])
                    } else {
                        novoArray.push(``)
                    }
                }
                novaMatriz.push(novoArray)
                novoArray = []
            }
            mostrarMatriz(novaMatriz)
        break;
        case 7:
            for(let linha = 0; linha < matriz4x4.length; linha++){
                for(let coluna = 0; coluna < matriz4x4.length; coluna++){
                    if( linha + coluna < matriz4x4.length - 1 ){
                        novoArray.push(matriz4x4[linha][coluna])
                    } else {
                        novoArray.push(``)
                    }
                }
                novaMatriz.push(novoArray)
                novoArray = []
            }
            mostrarMatriz(novaMatriz)
        break;
        case 8:
            matriz4x4 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)
            console.clear()
            cabecalho()
            console.log(`Nova matriz criada!`)
        break;
        case 9:
            console.log(`Programa Encerrado!`)
            rodape()
        break;
        default:
            console.log(`Número inválido!`)
        break;
    }

} while (escolha != 9)