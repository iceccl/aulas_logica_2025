const prompt = require('prompt-sync')();
//AULA 12! Trabalhando com a repetição "for"

//criando nosso primeiro for:
for (let i = 0; i < 100; i++) {
    console.log(i)
}
//entregando os notbooks por ordem

console.log('Entregando notebooks')
for (let nr = 1; nr < 32; nr++) {
    let nome = prompt(`Quem é o número ${nr}?: `)
    let presente = prompt(`O(A) ${presente} veio para a escola?(S/N): `)
    if (presente = "S") {
        console.log(`pegar notebook ${nr}`);
        console.log(`pegar mouse ${nr}`);
        console.log(`pegar fonte ${nr}`);
        console.log(`levar o notebook até ${nr}`);
    }else{
        console.log(`Não pegar notebook ${nr}`);
        
    }
}