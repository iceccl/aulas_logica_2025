
let carros = ' Gol; Corsa; Palio; Monza; Fusca'
let listaCarros = carros.split(';')
for (let[posicao, carro] of listaCarros.entries()) {
    console.log(`posição: ${posicao}, Carro: ${carro}`);
}