// Exemplo 1
const calculadora = {
    soma: function(a, b){
        console.log("soma = " + (a + b))
    },
    subtracao: function(a, b){
        console.log("subtração = " + (a - b))
    },
    multiplicacao: function(a, b){
        console.log("multiplicação = " + (a * b))
    },
    divisao: function(a, b){
        console.log("divisão = " + (a / b))
    }
}

calculadora.soma(2, 2)
calculadora.subtracao(2, 2)
calculadora.multiplicacao(2, 2)
calculadora.divisao(2, 2)

// Exemplo 2
const calculadora2 = {
    soma: function(a, b){
        return a + b
    },
    subtracao: function(a, b){
        return a - b
    },
    multiplicacao: function(a, b){
        return a * b
    },
    divisao: function(a, b){
        return a / b
    }
}

console.log("soma = " + calculadora2.soma(2, 2))
console.log("subtração = " + calculadora2.subtracao(2, 2))
console.log("mulriplocação = " + calculadora2.multiplicacao(2, 2))
console.log("divisão = " + calculadora2.divisao(2, 2))
