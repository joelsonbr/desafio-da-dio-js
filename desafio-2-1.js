const readline = require("readline-sync");
let name = readline.question("Nome do jogador: ");
let vitorias = readline.questionInt("Quantas vitorias voce tem? ");
let derrotas = readline.questionInt("Quantas derrotas voce tem? ");
let valor = vitorias - derrotas;

if (valor < 10) {
  valor = "Bronze";
} else if (valor > 10 && valor <= 20) {
  valor = "Prata";
} else if (valor > 20 && valor <= 30) {
  valor = "Ouro";
} else if (valor > 30 && valor <= 50) {
  valor = "Platina";
} else if (valor > 50 && valor <= 70) {
  valor = "Acendente";
} else if (valor > 70 && valor <= 100) {
  valor = "Imortal";
} else {
  valor = "Radiante";
}

console.log(`O jogador ${name} esta no ranking ${valor}.`);
