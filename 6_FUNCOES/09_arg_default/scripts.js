function potencia(base, exp=2) { // valor default
  return Math.pow(base, exp);
}

const potencia2 = (base, exp=2) =>{ // valor default em arrow function
  return Math.pow(base, exp)

}


console.log(potencia(2));

console.log(potencia(2,2));

console.log(potencia(2,3));


console.log(potencia2(2));