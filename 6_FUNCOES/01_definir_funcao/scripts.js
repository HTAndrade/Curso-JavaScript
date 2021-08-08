function imprimirNoConsole() { // Corpo da função
  console.log("Olá mundo!");
}

imprimirNoConsole(); // Chamar uma função

function imprimirUmNumero(num) {
  console.log("O número é: " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(8);

const numeroAleatorio = function() { // Função anonima atrelada a uma variavel
  console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();
