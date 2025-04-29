const prompt = require('prompt-sync')();
let listaNomes = []
function adicionarNome(nome) {
    let decisao = prompt('Deseja adicionar ou remover algo da lista?(R/A): ').toUpperCase()
    if (decisao == 'A'){
        listaNomes.push(nome)
    }else if(decisao == 'R'){
        let saber = prompt('digite o nome a ser removido: ')
        //Quando o indexOf não encontra o elemento ele retorna -1
        let posicao = listaNomes.indexOf(saber)
        if (posicao != -1){
            listaNomes.splice(posicao, 1)
        }
    }else{
        console.log('caractere inválido.');
    }
    console.log('Lista atual: ', listaNomes);
}
adicionarNome('Pedro')
adicionarNome('Yasmin')
adicionarNome('Lucas')