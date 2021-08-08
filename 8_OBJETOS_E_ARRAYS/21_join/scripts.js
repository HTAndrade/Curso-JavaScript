let frase = "Testando o método split";

let palavras = frase.split(" ");

let novaFrase = palavras.join("@");

console.log(novaFrase);

console.log(palavras.join(" "));


let email = ["hugotsandrade", "huguinho"]

for(let i = 0; i < email.length; i++){

    console.log(email[i] + "@gmail.com")

}

email.forEach(email => {
    console.log(email + "@gmail.com")
})
