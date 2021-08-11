class Cachorro {
  constructor(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
  }
}

let labrador = new Cachorro('Labrador', 4, 'Amarelo');

console.log(labrador);


class Humano {
  constructor(nome, sexo, peso, altura, cor) {
    this.nome = nome
    this.sexo = sexo
    this.peso = peso
    this.altura = altura
    this.cor = cor
  }
}

let pessoa = new Humano('Hugo', 'masculino', 85, 1.73, "branco")

//console.log(pessoa)
console.log("Nome: " + pessoa.nome)
console.log("Sexo: " + pessoa.sexo)
console.log("Peso: " + pessoa.peso + "Kg")
console.log("Altura: " + pessoa.altura + "cm")
console.log("Cor: " + pessoa.cor)