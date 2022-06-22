var input = require('readline-sync')
console.log(`------------------------------`)
console.log(`      ex028_melhorAluno`)
console.log(`------------------------------`)
let quantidadeDeAlunos = input.question(`Quantos alunos a turma tem? `)
console.clear()
let contador = 0
let melhorNota = 0
let melhorAluno = ``
while( contador < quantidadeDeAlunos ){
  console.log(`------------------------------`)
  console.log(`      ex028_melhorAluno`)
  console.log(`------------------------------`)
  let nomeAluno = String(input.question(`Nome do aluno ${contador + 1}: `))
  let notaAluno = Number(input.question(`Nota do aluno ${contador + 1}: `))
  if( notaAluno > melhorNota ) {
    melhorNota = notaAluno
    melhorAluno = nomeAluno
  }
  console.clear()
  contador++
}
console.log(`------------------------------`)
console.log(`      ex028_melhorAluno`)
console.log(`------------------------------`)
console.log(`A turma tem ${quantidadeDeAlunos} alunos!`)
console.log(`O melhor aproveitamento foi de ${melhorAluno} com a nota ${melhorNota}`)
console.log(`------------------------------`)