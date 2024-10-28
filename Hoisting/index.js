console.log(x); // undefined

var x = 5;

console.log(y); //Error: y not initialized   
let y = 10

console.log(z); //Error: z not initialized
let z = 15
console.log(x); // x = 5
hoistedFunction(); // ABC

function hoistedFunction(){
    console.log("ABC")
}
