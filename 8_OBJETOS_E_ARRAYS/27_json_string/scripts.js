let pessoa = {
  "nome": "Matheus",
  "idade": 28,
  "profissao": "Programador",
  "hobbies": ["Video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa); // transmora um JSON em string

console.log(pessoaTexto);
// console.log(pessoaTexto.nome);

let pessoaJSON = JSON.parse(pessoaTexto); // transforma uma string em JSON

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);

