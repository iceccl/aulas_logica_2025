const prompt = require('prompt-sync')();

//trabalhando com laços de repetição.

//executar o laço x vezes

let contador = 1;

//enquanto a condição for verdadeira
//ou seja, enquanto o contador for menor ou igual a 5
//incrementando a variável ou seja adicionando valor a ela para que continue o processo até que a condição seja atingida
while (contador <= 5) {
    console.log(`O contador é ${contador}`)
    contador = contador + 1
}

console.log('fim')

let senha_senai = '12345'

while (true) {
    let senha = prompt('digite a senha: ')
    if (senha_senai == senha) {
        console.log('Você hackeou a senha.');
        break;
    }else if (senha == 'Desisto'){
        break;
    }
}
let soma = 0;
let qtd = 0;

while (true) {
    let valor = Number(prompt('Digite o valor do produto (0 para encerrar): '));
    if (valor == 0) {
        break;
    }else{
        soma = soma + valor
        qtd ++
    }
}
console.log(`Foram informados ${qtd}`);
console.log(`Valor total dos produtos ${soma.toFixed(2)}`);

let soma2 = 0;
let qtd2 = 0;
let encerrar = ""
while (encerrar != 'SUB-TOTAL') {
    let valor = Number(prompt('Digite o valor do produto: '));
   
        soma2 = soma2 + valor
        qtd2 ++;
    encerrar= prompt('deseja continuar? (digite SUB-TOTAL)')
}

console.log(`Foram informados ${qtd2}`);
console.log(`Valor total dos produtos ${soma2.toFixed(2)}`);

console.log('#############################');
console.log("🤔   JOGO DA ADIVINHAÇÃO   🤔");
console.log('#############################');

let nrSorteado = Math.floor(Math.random() * 100 + 1); // gera um número aleatório.
let acertou = false;

while (!acertou) {
    const chute = parseInt(prompt('🤔 Digite um número entre um e cem para adivinhar: '))
    if (chute > nrSorteado) {
        console.log(`Você chutou ${chute}, Tente um número 👇!`);
    }else if( chute < nrSorteado){
        console.log(`Você chutou ${chute}, Tente um número 👆!`);
    }else if (chute == nrSorteado) {
        console.log(`Você chutou ${chute}, Parabéns você acertou🎉!`);
        acertou = true
    }
}
console.log('O FIM')

