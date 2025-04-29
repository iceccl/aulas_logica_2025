function revisar(valor) {
    if (valor <= -1) {
        console.log('O valor é negativo');
    }else if (valor >= 0){
        console.log('O valor é positivo.');
    }else{
        console.log('Valor inválido');
    }
}
revisar(30)
revisar(-1)
revisar(-10)