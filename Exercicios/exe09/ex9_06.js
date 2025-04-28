
function aleatorio(NUMcaracteres) {
    let Caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    let senha = ''

    for (let i = 0; i < NUMcaracteres; i++) {
        let letraSorteada = Math.floor(Math.random() * Caracteres.length)
        senha += Caracteres[letraSorteada]
    }
    return senha;
}
console.log('senha de 6 caracteres: ',aleatorio(6));
console.log('senha de 10 caracteres: ',aleatorio(10));

