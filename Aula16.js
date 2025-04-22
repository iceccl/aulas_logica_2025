//Programando a dinamica de criptografia
let alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let segredo = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C'];

function criptografar(texto) {
    let res = '';
    for(let letra of texto) {
        let posicao = alfabeto.indexOf(letra)
        res += segredo[posicao]
    }
    return res
}

function descriptografar(texto) {
    let res = '';
    for(let letra of texto) {
        let posicao = segredo.indexOf(letra)
        res += alfabeto[posicao]
    }
    return res
}


console.log(criptografar('SENAI'));
console.log(descriptografar('VHQDL'));

