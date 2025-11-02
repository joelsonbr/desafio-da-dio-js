// Crie uma classe chamada Personagem com:
// - nome
// - idade

//
// A classe deve ter um método atacar() que exibe:
// "{tipo} atacou usando {ataque}"
//
// O ataque muda conforme o tipo:
// mago -> usou magia
// guerreiro -> usou espada
// monge -> usou artes marciais
// ninja -> usou shuriken
//
// Exemplo de saída:
// mago atacou usando magia
// guerreiro atacou usando espada

/* - tipo (mago, guerreiro, monge ou ninja) */
class Personagem {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "ataque desconhecido";
    }

    console.log(`${this.tipo} atacou usando ${ataque}`);
  }
}

const p1 = new Personagem("Gabriel", 23, "mago");
p1.atacar();

const p2 = new Personagem("Joelson", 17, "guerreiro");
p2.atacar();

const p3 = new Personagem("Maria", 43, "monge");
p3.atacar();

const p4 = new Personagem("Anny", 15, "ninja");
p4.atacar();
