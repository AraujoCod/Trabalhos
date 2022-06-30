qtdeAlunos = 5
totalMedia = 0
for (i = 0; i < qtdeAlunos; i ++){
    let nota1 = Math.random() * 1281
    let nota2 = Math.random() * 1800
   let nota3 = Math.random() * 3000
    let nota4 = Math.random() * 5000
    let nota5 = Math.random() * 2000
    let media = (nota1 + nota2 + nota3 + nota4 + nota5) /5
    totalMedia += media
    console.log("notas [",
    nota1.toFixed(2),
    nota2.toFixed(2),
    nota3.toFixed(2),
    nota4.toFixed(2),
    nota5.toFixed(2),
    "], média:[",
    media.toFixed(2),"]"
    )
}
totaMedia = totalMedia /qtdeAlunos
console.log("média de notas", totalMedia.toFixed(2));
