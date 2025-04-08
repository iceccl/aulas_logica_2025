const prompt = require('prompt-sync')();

let lucroVendas = Number(prompt('digite qual a quantia que você ganhou com as vendas neste mês: '));
let comissao1 = (lucroVendas * 0.05);
let comissao2 = (lucroVendas * 0.03);
if (lucroVendas > 5000) {
    console.log(`Sua comissão este mês é de 5%, o total é de R$${comissao1}`);
}else{
    console.log(`Sua comissão este mês é de 3%, portanto o total é de R$${comissao2}`);
}

