function makeCounter(){
    let count = 1;
    return{
        increment(){
            count = count * 2;
        },
        getCount(){
            return count;
        }
    };
}

const counterr = makeCounter();
for(let i=1;i<10;i++){
    counterr.increment();
    console.log(counterr.getCount())
}