let nome = "Hugo";
let idade = 28;

if(nome != undefined && nome == "Joaquim") {
  console.log("Nome está definido");
} else if(nome == "Hugo" && nome.length > 3 && idade == 28) {
  console.log("O nome é Hugo");
} else {
  console.log("Não é Hugo!");
}

if(2 > 1) {
  console.log("Teste"); // <-----
} else if(1 == 1) {
  console.log("Testando");
}

if(1 > 2) {
  console.log("Teste");
} else if(1 == 1) {
  console.log("Testando"); // <-----
}