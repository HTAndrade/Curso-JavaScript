class Endereço {
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado

    }

    set novaRua(novaRua){
        this.rua = novaRua
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado
    }
}

let endereco = new Endereço("Rua Dr. Antonio Bento", "Vila Mathias", "Santos", "SP")

console.log(endereco)

endereco.novaRua = "Rua Presidente Vargas"

console.log(endereco)

endereco.novoBairro = "Morro São Bento"

console.log(endereco)

endereco.novaCidade = "São Vicente"

console.log(endereco)

endereco.novoEstado = "RJ"

console.log(endereco)