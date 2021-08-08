let x = 10; // Global

if(x > 5) {
  let x = 20;// Local
  x++;
  console.log(`Local = ${x}`);
}

console.log(`Global = ${x}`);