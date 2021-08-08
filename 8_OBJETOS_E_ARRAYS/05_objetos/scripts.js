let cachorro = {
  patas: 4,
  nome: 'Shark',
  latir: function() {
    console.log("Au Au");
  }
};

console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();

// [] = array
// {} = obj
// atribuição por ':'

let hugo = {
  idade: 28,
  sexo: 'masculino',
  profissao: 'auxiliar de despacho',
  hobby: 'jogar videogame'
}

console.log(hugo.idade)
console.log("Hugo trabalha como " + hugo.profissao)
console.log(typeof hugo)
console.log(hugo.hobby)