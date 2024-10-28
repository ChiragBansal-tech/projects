function createCounter(){
    let count = 0;
    return function(){
        count += 1;
        return count;
    };
}

const counter = createCounter();

document.getElementById('increment').onclick = function(){
    const newCount = counter();
    document.getElementById('display').textContent = newCount;
}