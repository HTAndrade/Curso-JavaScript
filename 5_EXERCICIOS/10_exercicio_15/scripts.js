let x
let y = 41
let divisores = 0

for(x = 1; x <= y; x++){
    if(y % x == 0)
   	divisores++;
}

if (divisores == 2){
    console.log(`${y} é primo`)
} else{
    console.log(`${y} não é primo`)
}