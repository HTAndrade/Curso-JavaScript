console.log(typeof 5);
console.log(typeof 12.7);
console.log(typeof -123);





//Extraaaaaaaaa//

var data = new Date();
var dia = data.getDate();
var dia_mes = data.getMonth();

var dias = new Array(
    'domingo','segunda','terça','quarta','quinta','sexta','sábado'
   );
   
console.log(data)
console.log(dia)
console.log(dia_mes + 1)

console.log('Hoje é ' + dias[data.getDay()]);