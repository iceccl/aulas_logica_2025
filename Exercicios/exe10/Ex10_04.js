const prompt = require('prompt-sync')();
let saldo = 0;


function deposito(valor) {
    saldo += valor
    console.log(`Depósito de ${valor} realizado com sucesso.`);
}

function sacar(valor) {
    saldo -= valor
    console.log(`Saque de ${valor}R$ realizado com sucesso.`);
}

function consulta() {
    console.log('Você possui ', saldo,'R$ em sua conta');
}


while (saldo <= 1500000) {
    console.log('////////////////////////////////////////////////////////////////////////');
    console.log("Bem vindo ao caixa eletrônico!");
    console.log("O que deseja fazer?");
    let escolha = prompt("[1]Depositar, [2]Sacar, [3]Mostrar saldo, [4]Sair: ")
    if (escolha == '1') {
        deposito(prompt('Digite o valor a ser depositado: '))
    }else if(escolha == '2'){
        console.log('//////////////////////////////////');
        sacar(prompt('Digite o valor a ser sacado: '))
    }else if(escolha == '3'){
        console.log('/////////////////////////////////////');
        consulta()
    }else if(escolha == '4'){
        break;
    }else{
        console.log('///////////////////');
        console.log('Caractere inválido.');
    }
}
