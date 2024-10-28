const marks = [100,92,95,63,125,23,67,90,97,25,63,14,65];

let toppers = marks.filter((val)=>{
    return val >= 90
});

console.log(toppers);

//for Console Enviorment

let n = prompt("Enter a Number:");
let arr = [];

for(let i = 0 ; i < n ; i++){
    arr[i] = i; 
} 

console.log(arr);

let a = arr.reduce((prev,curr) =>{
    return prev+curr
});

// for Node enviorment

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a Number: ", (n) => {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        arr[i-1] = i;
    }

    console.log(arr);

    let a = arr.reduce((prev, curr) => {
        return prev + curr;
    });

    console.log("Sum:", a);
    rl.close();
});