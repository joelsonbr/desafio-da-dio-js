// nome do jogador
// vitorias total
//derrota total
// fazendo a subtrção de vitória e derrota = valor
// valor vai desidir que se o jogador é: bronze, prata, ouro, platina, ascedente, imortal, radiante

const readline = require("readline-sync");

let name = readline.question("Nome do jogador: ");
let vitorias = readline.question("Quantas vitorias voce tem? ");
let derrotas = readline.question("Quantas derrotas voce tem? ");
let valor = vitorias - derrotas;
if (valor >= 1 && valor <= 10) {
  console.log(`O jogador ${name} esta no ranking Bronze.`);
} else if (valor >= 11 && valor <= 20) {
  console.log(`O jogador ${name} esta no ranking Prata.`);
} else if (valor >= 21 && valor <= 30) {
  console.log(`O jogador ${name} esta no ranking Ouro.`);
} else if (valor >= 31 && valor <= 50) {
  console.log(`O jogador ${name} esta no ranking Platina.`);
} else if (valor >= 51 && valor <= 70) {
  console.log(`O jogador ${name} esta no ranking Acendente.`);
} else if (valor >= 71 && valor <= 100) {
  console.log(`O jogador ${name} esta no ranking Imortal.`);
} else {
  console.log(`O jogador ${name} esta no ranking Radiante.`);
}
