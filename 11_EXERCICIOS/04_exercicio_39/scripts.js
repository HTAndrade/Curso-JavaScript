class Carro {
    constructor(marca, cor, gasolina, consumo){
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
        this.consumo = consumo
        
    }

    dirigir(km) {

        let litrosConsumidos = km / this.consumo
        this.gasolina -= litrosConsumidos

    }

    abastecer(l){
        this.gasolina += l
    }

}

let carro = new Carro("VW", "Cinza", 100, 14)

console.log(carro)

carro.dirigir(100)

console.log(carro)

carro.abastecer(10)

console.log(carro)
