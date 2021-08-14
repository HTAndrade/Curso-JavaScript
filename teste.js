console.log(sum(10,20));
diff(10,20);

function sum(x,y){
    return x + y;
}

let diff = function(x,y){
    return x - y
}

class x {
    get y() { return 42;}
}

console.log(x.y)

var a = ['dog', 'cat', 'hen']
a[100] = 'fox'
console.log(a.length)

class TaxCalculator{
    static calculate(total){
        return total * .05
    }
}

new TaxCalculator().calculate(50)

var obj
console.log(obj)

const foo = {
    bar(){
        console.log("Hello World!")
    },
    name: "Albert",
    age: "26"
}

console.log("I")
setTimeout(() =>{
    console.log("love")
}, 0)

console.log("JavaScript")

var v = 10
var f1 = function(){
    console.log(v)
}

var f2 = function() {
    var v = 2;
    f1()
}

f2()

const foo = {
    name: "Albert"
}

delete foo.name

console.log(foo.name)

const foo = [1, 2, 3]
const [n] = foo
console.log(n)