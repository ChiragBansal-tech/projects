console.log("filter")

const age = [28,12,30,58,17,18];
const result = age.filter(check)

console.log(result)


function check(age){
    return age >=18;
}

console.log("Reduce")

const num = [175,50,25];
const res = num.reduce(sub)
console.log(res)

function sub(total,num){
    return total - num;
}


