const pessoa = {
  maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));


/*
Prototype:

Um objeto fallback(pai) de outro objeto;

Quando um objeto recebe uma requisição de uma propriedade que não tem,
ele procura no prototype deste objeto;

O prototype de um objeto criado do zero é o 'Object', que tem os métodos
nativos da linguagem;

Curiosidade: o 'Object' é o pai de todos os objetos.
*/