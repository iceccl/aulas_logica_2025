const prompt = require('prompt-sync')();

let velCarro = Number(prompt('digite a velocidade do carro: '));
let limite = 80
let multa = (velCarro - limite) * 7

if(velCarro > 80) {
    console.log(`seu veículo estava acima do limite de velocidade de ${limite}km/h, você foi multado em R$${multa}`);
    
}else{
    console.log('você estava dentro do limite permitido de velocidade.');
}


