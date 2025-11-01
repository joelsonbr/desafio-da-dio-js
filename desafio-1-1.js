const readline = require("readline-sync");

let name = readline.question("Nome do jogador: ");

let valor = readline.question("Quantos pontos de Xp voce tem? ");

if (valor < 500) {
  valor = "Bronze";
} else if (valor > 500 && valor <= 2000) {
  valor = "Prata";
} else if (valor > 2000 && valor <= 5000) {
  valor = "Ouro";
} else if (valor > 5000 && valor <= 7500) {
  valor = "Platina";
} else if (valor > 7500 && valor <= 9000) {
  valor = "Acendente";
} else if (valor > 9000 && valor <= 10000) {
  valor = "Imortal";
} else {
  valor = "Radiante";
}

console.log(`O jogador ${name} esta no ranking ${valor}.`);
