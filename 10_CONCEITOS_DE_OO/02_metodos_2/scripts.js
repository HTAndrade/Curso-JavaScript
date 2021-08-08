const cachorro = {
  raca: 'SRD',
  uivar: function() {
    console.log("Auuuuuuuuuuuu");
  },
  rosnar: function() {
    console.log("grrrrr");
  },
  setRaca: function(raca) {
    this.raca = raca; // 'this' se refere a este objeto, no caso: this = cachorro
  },
  getRaca: function() {
    return "A raça é " + this.raca;
  }
}

console.log(cachorro.raca);

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raca);

console.log(cachorro.getRaca());
