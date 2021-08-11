class Conta {
    constructor(saldo){
        this.saldo = saldo
    }

    deposito(valor) {
        this.saldo += valor
    }
    
    saque(valor){
        this.saldo -= valor
    }
}

let conta = new Conta(1000)

let operacao = prompt("saque / deposito ?")

if (operacao == "saque"){
    let x = parseInt(prompt("Qual valor do saque?"))

    conta.saque(x)

    console.log("Saque efetuado. Seu novo saldo é " + conta.saldo)
} else if(operacao == "deposito"){
    let y = parseInt(prompt("Qual valor do deposito?"))

    conta.deposito(y)

    console.log("Deposito efetuado. Seu novo saldo é " + conta.saldo)
}
