let carros = ["BMW", "Audi", "VW", "Fiat"];

let removerPrimeiroCarro = carros.shift(); // Remove o primeiro carro

console.log(removerPrimeiroCarro); // BMW
console.log(carros); // Audi, VW, Fiat

carros.unshift('Gurgel'); // Adiciona no primeiro carro

console.log(carros); // Gurgel, Audi, VW, Fiat
console.log(carros[0]); // Gurgel