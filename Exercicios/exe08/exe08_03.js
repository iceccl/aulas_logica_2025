let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio' , 'Junho', 'Julho',
    ,'Agosto','setembro','Outubro','Novembro','Dezembro']
let mesesComJ = 'Janeiro, Junho, Julho'
let mesesEscolhidos = mesesComJ.split(',')
console.log(`Os meses que começam com J são: `);
for (let mes of mesesEscolhidos) {
    console.log(mes);
}
//**incompleto**