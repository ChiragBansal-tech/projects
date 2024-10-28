const a = 5;
const b = 10;
const c = 35;
let total1 = 0;
function total(){
     total1 = sum(a,b,c);
     console.log(total1)    
}

function sum(a,b,c){
    return(a+b+c)
}
total();

const str = "hello World"

function pd(str){
    return toUpperCase(str);
}
function toUpperCase(str){
    return str.toUpperCase();
}
console.log(pd(str));


function xyz(arr , abc){
    for(let i = 0; i < arr.length ;i++ ){
        abc(arr[i],i);
    }
}

xyz ([1,2,4] , (element ,index) => {
    console.log(`Element ${index}: ${element * 2}`)
});