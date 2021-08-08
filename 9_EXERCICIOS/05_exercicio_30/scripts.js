let nomes = ["Hugo", "Nathaly", "Maggie", "Maya", "Nath"]

let cont = 0

for (let i = 0; i < nomes.length; i++){

    if(nomes[i] == "Hugo"){
    cont++
    }
}

if(cont > 0){
    console.log("Encontramos o seu nome!")
} else (
    console.log("Não encontramos o seu nome.")
)