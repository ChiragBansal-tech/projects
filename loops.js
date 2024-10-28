const x = [1,2,3,4,5]
console.log("For Loop");
for(let i = 0;i < 5; i++){
    console.log(x[i]*2);
}

const y = [1,2,3,4,5]
console.log("while Loop");
let j = 0;
while(j<5){
    console.log(y[j]**y[j]);
    j++;
}

const z = [2,3,4,5]
console.log("do-while Loop")
let k = 2;
do{   
    console.log(z[k]**k);
    k++;
}while(k>8)

const a =[
    {p : 1}, 
    {q : 2}, 
    {r : 3}
];
console.log("for-in Loop");
for(let l in a){
    console.log(l,a[l]);
}

const b = [1,2,3,4,5];
console.log("for-of Loop");
for(let m of b){
    console.log(m);
} 

const c = [1,2,3,4,5];
let sum1=0;
console.log("for-Each Loop");
c.forEach(sum);
function sum(item){
    sum1 += item;
}
console.log(sum1)