
function parImparFor() {
    console.log("Laço for:")
    for(let x = 0; x <= 50; x++){
        if(x == 0){
            console.log(`${x} neutro`)
        } else if(x % 2 == 0){
            console.log(`${x} par`)
        } else {
            console.log(`${x} impar`)
        }
    }
}


function parImparWhile() {
    console.log("Laço while")
    let i = 0

    while(i <= 50){
        if(i == 0){
            console.log(`${i} neutro`)
        } else if(i % 2 == 0){
            console.log(`${i} par`)
        } else {
            console.log(`${i} impar`)
        }
    
        i++
    }
}

parImparFor()
parImparWhile()