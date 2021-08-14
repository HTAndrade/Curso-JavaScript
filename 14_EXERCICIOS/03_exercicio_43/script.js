const reg = /\w+: (Nike|Adidas|Puma|Asics)/; 

console.log(reg.test("Nome: Nike")) // true
console.log(reg.test("Nome: Adidas")) // true
console.log(reg.test("Nome: Puma")) // true
console.log(reg.test("Nome: Asics")) // true
console.log(reg.test("Nome: UnderArmor")) // false
console.log(reg.test("Nome: Umbro")) // false

const reg2 = /Marca: (Nike|Adidas|Puma|Asics)/; 

console.log(reg2.test("Marca: Nike")) // true
console.log(reg2.test("Marca: Adidas")) // true
console.log(reg2.test("Marca: Puma")) // true
console.log(reg2.test("Marca: Asics")) // true
console.log(reg2.test("Marca: UnderArmor")) // false
console.log(reg2.test("Marca: Umbro")) // false