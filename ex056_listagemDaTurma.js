var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`     ex056_listagemDaTurma`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

//declaração de variáveis
const QTDE_DE_ALUNOS = 4
let nome = []
let notaA = []
let notaB = []
let media = []
let status = []
let totalTurma = 0
let mediaTurma = 0
let alunoAcimaDaMedia = 0

//entrada de dados
for(let contador = 0; contador < QTDE_DE_ALUNOS; contador++){
  cabecalho()
  nome[contador] = String(input.question(`Nome do aluno nº ${contador + 1}: `))
  notaA[contador] = Number(input.question(`Digite a 1ª nota: `))
  notaB[contador] = Number(input.question(`Digite a 2ª nota: `))
  console.clear()
}

//processamento de dados
for(let contador = 0; contador < QTDE_DE_ALUNOS; contador++){
  //definindo a média de cada aluno
  media[contador] = ((notaA[contador] + notaB[contador]) / 2)
  //definindo o status de cada aluno
  if(media[contador] >= 7){
    status[contador] = `APROVADO`
  } else {
    status[contador] = `REPROVADO`
  }
  totalTurma += media[contador]
}
//definindo a média da turma
mediaTurma = totalTurma / QTDE_DE_ALUNOS

//definindo a quantidade de alunos com a média maior que a média da turma
for(let contador = 0; contador < QTDE_DE_ALUNOS; contador++){
  if(media[contador] > mediaTurma){
    alunoAcimaDaMedia++
  }
}

//saída de dados
cabecalho()
console.log(`NOME --> MÉDIA`)
rodape()
for(let contador = 0; contador < QTDE_DE_ALUNOS; contador++){
  console.log(`${nome[contador]} --> ${media[contador]}`)
}
rodape()
console.log(`NOME --> STATUS`)
rodape()
for(let contador = 0; contador < QTDE_DE_ALUNOS; contador++){
  console.log(`${nome[contador]} --> ${status[contador]}`)
}
rodape()
console.log(`MÉDIA DA TURMA`)
rodape()
console.log(`Média da Turma: ${mediaTurma.toFixed(2)}`)
console.log(`Alunos acima da média: ${alunoAcimaDaMedia}`)
rodape()