const readline = require("readline-sync");

let name = readline.question("Qual é o seu nome? ");
let xp = readline.questionInt("Quanto Xp você tem? ");

if (xp >= 1001 && xp <= 2000) {
  console.log(
    `O herói de nome ${name} está no nível  de ${xp} está no Ranking Bronze.`
  );
} else if (xp >= 2001 && xp <= 6000) {
  console.log(
    `O herói de nome ${name} está no nível de ${xp} está no Ranking Prata.`
  );
} else if (xp >= 6001 && xp <= 7000) {
  console.log(
    `O herói de nome ${name} está no nível de ${xp} está no Ranking Ouro.`
  );
} else if (xp >= 7001 && xp <= 8000) {
  console.log(
    `O herói de nome ${name} está no nível de ${xp} está no Ranking Platina.`
  );
} else if (xp >= 8001 && xp <= 9000) {
  console.log(
    `O herói de nome ${name} está no nível de ${xp} está no Ranking Ascedente.`
  );
} else if (xp >= 9001 && xp <= 10000) {
  console.log(
    `O herói de nome ${name} está no nível de ${xp} está no Ranking Imortal.`
  );
} else {
  console.log(
    `O herói de nome ${name} está no nível de ${xp} está no Radiante`
  );
}
