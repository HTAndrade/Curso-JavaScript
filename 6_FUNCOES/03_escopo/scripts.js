let y = 10; // Global

function imprimir() {
  let y = 150; // Local

  console.log(`Local = ${y}`);
}

imprimir();

console.log(`Global = ${y}`);
