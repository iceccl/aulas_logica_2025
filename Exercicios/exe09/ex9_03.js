let multiplo = 0
function numero(n){
    for (let i = 0; i < 10; i++) {
        multiplo++
        console.log(`${n} X ${multiplo} = ${n*multiplo}`);
        
    }
    multiplo = 0
}
console.log(numero(2));
console.log(numero(4));
console.log(numero(10));

