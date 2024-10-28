function add(a){
    return function(b){
        return function(c){
            return a + b + c
        };
    }; 
}

console.log(add(1)(2)(3))
console.log(add(10)(68)(22))