let pessoa = {
  nome: "Matheus",
  idade: 29,
  profissao: "Programador",
}

console.log(pessoa.nome); // imprime a propriedade 'nome'

// delete pessoa.nome; // deleta a propriedade 'nome'

console.log(pessoa.nome); // imprime a propriedade 'nome', porém undefined

console.log(pessoa); // imprime o array 'pessoa'

pessoa.casado = false; 

console.log(pessoa.casado);