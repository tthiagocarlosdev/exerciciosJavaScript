var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`    ex060_corrigindoProvas`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

//declaração de variáveis
const QTDE_DE_QUESTOES = 5
const QTDE_DE_ALUNOS = 3
let gabaritoQuestoes = []
let alunos = []
let gabaritoAluno = []
let mediaAluno = []
let somaMediaDosAlunos = 0
let mediaDaTurma = 0

//entrada de dados
//cadastro gabarito
cabecalho()
for(let contador = 0; contador < QTDE_DE_QUESTOES; contador++){
  gabaritoQuestoes[contador] = input.question(`Gabarito da ${contador + 1}ª questão: `)
}

//cadastro do aluno
console.clear()
cabecalho()
for(let contador = 0; contador < QTDE_DE_ALUNOS; contador++){
  alunos[contador] = input.question(`Informe o nome do ${contador + 1}º aluno: `)
}

//cadastro gabarito de cada aluno
for(let contadorA = 0; contadorA < QTDE_DE_ALUNOS; contadorA++){
  console.clear()
  cabecalho()
  mediaAluno[contadorA] = 0

  console.log(`Insira o gabarito do aluno ${alunos[contadorA]}`)
  for(let contadorQ = 0; contadorQ < QTDE_DE_QUESTOES; contadorQ++){
    gabaritoAluno[contadorQ] = input.question(`Reposta da ${contadorQ + 1}º questão: `)

    //processamento de dados
    if(gabaritoAluno[contadorQ] == gabaritoQuestoes[contadorQ]){
      mediaAluno[contadorA] += 2
    }
  }
  somaMediaDosAlunos += mediaAluno[contadorA]
}

mediaDaTurma = somaMediaDosAlunos / QTDE_DE_ALUNOS

//saída de dados
console.clear()
cabecalho()
for(let contador = 0; contador < QTDE_DE_ALUNOS; contador++){
  console.log(`${alunos[contador]} - média: ${mediaAluno[contador].toFixed(2)}`)
}
rodape()
console.log(`A média da turma é: ${mediaDaTurma.toFixed(2)}`)
rodape()