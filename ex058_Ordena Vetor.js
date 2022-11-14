var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`       ex058_OrdenaVetor`)
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


//declaração de variáveis
const QTDE_DE_VALORES = 10
let listaDeValores = []

//entrada de dados
cabecalho()
for(let contador = 0; contador < QTDE_DE_VALORES; contador++){
  // listaDeValores[contador] = Number(input.question(`Insira o ${contador + 1}º valor: `))
  listaDeValores[contador] = getRandomIntInclusive(0, 100)
}

//saída de dados
console.clear()
cabecalho()
console.log(`Valores inseridos`)
for(let contador = 0; contador < QTDE_DE_VALORES; contador++){
  console.log(listaDeValores[contador])
}
rodape()

//processamento de dados - bubble sort
for(let contadorA = 0; contadorA < QTDE_DE_VALORES; contadorA++){
  for(let contadorB = contadorA+1; contadorB < QTDE_DE_VALORES; contadorB++){
    if(listaDeValores[contadorA] > listaDeValores[contadorB]){
      let troca = listaDeValores[contadorA]
      listaDeValores[contadorA] = listaDeValores[contadorB]
      listaDeValores[contadorB] = troca
    }
  }
}

//saída de dados
console.log(`Valores ordenados`)
for(let contador = 0; contador < QTDE_DE_VALORES; contador++){
  console.log(listaDeValores[contador])
}
rodape()