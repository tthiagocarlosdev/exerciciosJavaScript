var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`     ex061_reservarCinema`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function cadeirasCinema(){
  let cinema = ""
  for(let c = 1; c <= QTDE_DE_CADEIRAS; c++){
    cinema += `| ${reserva[c]}`
  }
  console.log(cinema)
}

function cadeiraReservada(numero){
  for(let c = 1; c <= QTDE_DE_CADEIRAS; c++){
    if(reserva[numero] == `#`){
      return false
    } else {
      return true
    }
  }
}

//declaração de variáveis
let resposta = ""
const QTDE_DE_CADEIRAS = 10
let reserva = []
let cadeira = 0

//inserção de valores no array reserva
for(let c = 1; c <= QTDE_DE_CADEIRAS; c++){
  reserva[c] = c
}

do {
  //entrada de dados
  cabecalho()
  cadeirasCinema()
  rodape()
  cadeira = Number(input.question(`Informe uma cadeira: `))

  //processando de dados
  while(cadeiraReservada(cadeira) == false){
    console.clear()
    cabecalho()
    cadeirasCinema()
    rodape()
    console.log(`Cadeira Reservada!`)
    cadeira = Number(input.question(`Informe uma cadeira: `))
  }

  for(let c = 1; c <= QTDE_DE_CADEIRAS; c++){
    if(reserva[c] == cadeira){
      reserva[c] = `#`
    }
  }

  //saída de dados
  console.clear()
  cabecalho()
  cadeirasCinema()
  rodape()

  //entrada de dados
  resposta = input.question(`Quer continuar? [s][n]: `)
  console.clear()

} while (resposta == "s")

console.clear()
cabecalho()
console.log(`Programa encerrado!`)
rodape()