
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio' , 'Junho', 'Julho',
    'Agosto','setembro','Outubro','Novembro','Dezembro']
let letra = 'J'
for (let mes of meses) {
    if (mes.includes(letra)) {
        console.log(mes);
    }
}
