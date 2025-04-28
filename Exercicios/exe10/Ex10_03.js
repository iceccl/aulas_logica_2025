const prompt = require('prompt-sync')();
let listaNomes = []
function nome(no) {
    let decisao = prompt('Deseja adicionar ou remover algo da lista?(R/A): ').toUpperCase()
    if (decisao == 'A'){
        listaNomes.push(no)
    }else if(decisao == 'R'){
        listaNomes.pop()
    }else{
        console.log('caractere inválido.');
    }
    console.log('Lista atual: ', listaNomes);
}
nome('Pedro')
nome('Yasmin')
nome('Lucas')