const person = [
    {firstName :"Raj" , lastName : "Verr Singh"},
    {firstName :"Rai" , lastName : "Singhaniya"},
    {firstName :"Abhsihek" , lastName : "gupta"},
    {firstName :"Harsh" , lastName : "Bhardwaj"}
]

let  fullname = person.map(fn);
function fn(item){
    return[item.firstName ,item.lastName].join(" ").toUpperCase();
}
fullname.forEach(name => console.log(name));


const num =[1,2,3,4,5];
let total = 0;
const sum = num.map(add);
console.log(total);

function add(item){
    return[total += item ];
}
