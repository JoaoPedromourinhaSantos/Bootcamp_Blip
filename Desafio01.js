const readline = require('readline-sync');

// Usamos question para pedir dados no terminal
let nome = readline.question("Digite o nome do heroi: ");
let xp = parseInt(readline.question("Digite o xp do heroi: "));

if (xp < 1000) {
    console.log("O Herói de nome " + nome + " está no nível de Ferro");
} else if (xp >= 1000 && xp <= 2000) {
    console.log("O Herói de nome " + nome + " está no nível de Bronze");
} else if (xp > 2000 && xp <= 5000) {
    console.log("O Herói de nome " + nome + " está no nível de Prata");
} else if (xp > 5000 && xp <= 6000) {
    console.log("O Herói de nome " + nome + " está no nível de Ouro");
} else if (xp > 7000 && xp <= 8000) {
    console.log("O Herói de nome " + nome + " está no nível de Platina");
} else if (xp > 8000 && xp <= 9000) {
    console.log("O Herói de nome " + nome + " está no nível de Ascendente");
} else if (xp > 9000 && xp <= 10000) {
    console.log("O Herói de nome " + nome + " está no nível de Imortal");
} else {
    console.log("O Herói de nome " + nome + " está no nível de Radiante");
}