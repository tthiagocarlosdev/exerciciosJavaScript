//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`   ex047_fibonacciReferencia`)
  console.log(`------------------------------`)
}

function fibonacci(valorA, valorB){
  let fibonacci = valorA + ` ` + valorB
  let valorC = 0
  let contador = 1
  while(contador <= 13){
    valorC = valorA + valorB
    valorA = valorB
    valorB = valorC
    fibonacci += ` ` + valorC
    contador++
  }
  console.log(fibonacci)
}

//declaração de variáveis
const NUMERO_A = 0
const NUMERO_B = 1

//processamento e saída de dados
cabecalho()
fibonacci(NUMERO_A, NUMERO_B)
console.log(`------------------------------`)