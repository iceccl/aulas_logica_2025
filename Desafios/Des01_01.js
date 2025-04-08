const prompt = require('prompt-sync')();

let temp = Number(prompt('digite a temperatura em C°: '));

if (temp <= 15) {
    console.log('está frio.');
}else if(temp >= 16 && temp <= 25) {
    console.log('a temperatura está agradavel.');
}else if(temp >=26 && temp <= 35){
    console.log('está quente');
}else{
    console.log('está muito quente');
}
