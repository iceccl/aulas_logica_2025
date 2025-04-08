const prompt = require('prompt-sync')();

let listaTimes = ["Botafogo", "Palmeiras", "Fortaleza", "Internacional", "Flamengo", 
    "São Paulo", "Cruzeiro", "Bahia", "Corinthians", "Vitória", "Vasco", "Juventude", "Grêmio", "Fluminense", 
    "Atlético-MG", "RB Bragantino"];

//exiba o primeiro time da lista como campeão:
console.log("Campeão", listaTimes[0]);

//exiba os quatro primeiros times que irão jogar a libertadores:
console.log("Libertadores: ", listaTimes.slice(0, 4));

//exiba os quatro ultimos times que serão rebaixados para a série B
console.log("Série B: ", listaTimes.slice(-4));


