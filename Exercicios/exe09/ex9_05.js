const prompt = require('prompt-sync')();
function conta(n1,n2) {
    let operador = prompt('digite um operador(+ - * / **): ')
    if (operador == '+') {
        console.log(`${n1} + ${n2} = ${n1+n2}`);
    }else if(operador == '-'){
        console.log(`${n1} - ${n2} = ${n1-n2}`);
    }else if(operador == '*'){
        console.log(`${n1} X ${n2} = ${n1*n2}`);
    }else if(operador == '/'){
        console.log(`${n1} / ${n2} = ${n1/n2}`);
    }else{
        console.log(`${n1} ** ${n2} = ${n1**n2}`);
    }
}
conta(3,4)