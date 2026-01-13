// Classe que representa um herói de aventura
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // padroniza para minúsculas
    }

    // Método para determinar o ataque com base no tipo
    atacar() {
        let ataque;

        // Estrutura de decisão para definir o ataque
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }

        // Exibe a mensagem formatada
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// ===== Exemplo de uso =====

// Criando alguns heróis
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");
const heroi3 = new Heroi("Shen", 40, "ninja");
const heroi4 = new Heroi("Liang", 35, "monge");

// Chamando o método atacar
heroi1.atacar(); // O guerreiro atacou usando espada
heroi2.atacar(); // O mago atacou usando magia
heroi3.atacar(); // O ninja atacou usando shuriken
heroi4.atacar(); // O monge atacou usando artes marciais
