let consoleTeste = () => {
  console.log("Olá mundo!");
};

// Função normal:
function consoleTeste2(){
  consoleTeste("Olá Mundo!")
}

// Chamando a função
consoleTeste();
consoleTeste2();

let soma = (a,b) => {
  return a + b;
};

// Função normal
function soma2(a,b){
  return a + b;
}

// Chamando a função
console.log(soma(10,20));
console.log(soma2(20,30));