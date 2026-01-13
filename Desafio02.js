// Importa o módulo readline para entrada de dados no terminal
const readline = require('readline');

// Cria interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular saldo de vitórias
function saldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível do jogador
function nivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Pergunta vitórias
rl.question("Digite o número de vitórias: ", (v) => {
    rl.question("Digite o número de derrotas: ", (d) => {
        const vitorias = Number(v);
        const derrotas = Number(d);

        // Validação de entrada
        if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
            console.log("❌ Por favor, insira números válidos e positivos.");
        } else {
            const saldoVitorias = saldo(vitorias, derrotas);
            const nivelJogador = nivel(vitorias);

            console.log(`✅ O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivelJogador}`);
        }

        rl.close();
    });
});
