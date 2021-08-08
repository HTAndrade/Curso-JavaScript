let onibus = {
    rodas: 8,
    limite: 40,
    portas: 2
}

console.log(onibus)

delete onibus.rodas

console.log(onibus)

let adicionar = {
    janelas: 20
}

Object.assign(onibus, adicionar)

console.log(onibus)
console.log(onibus.janelas)