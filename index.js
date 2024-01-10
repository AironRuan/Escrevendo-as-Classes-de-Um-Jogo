class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'um ataque genérico';
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  const nomeHeroi = prompt('Digite o nome do herói:');
  const idadeHeroi = prompt('Digite a idade do herói:');
  const tipoHeroi = prompt('Digite o tipo do herói (mago, guerreiro, monge, ninja):');
  
  const heroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);
  heroi.atacar();