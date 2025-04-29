let dolar = 5.65
let euro = 6.64
function conversao(Nreais){
    console.log(Nreais, 'R$ em Dolár: ', (Nreais / dolar).toFixed(2));   
    console.log(Nreais, 'R$ em Euro: ', (Nreais / euro).toFixed(2));   
}
conversao(50)
conversao(1000)
conversao(16000)