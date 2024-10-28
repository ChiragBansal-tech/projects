function* fibonnacciGenerator(){
    let [a, b] = [0, 1];
    while(true){
        yield a;
        [a ,b] = [b, a + b];
    }
}

const fib = fibonnacciGenerator();

for(let i = 0 ;i < 10; i++){
    console.log(fib.next().value);
}
