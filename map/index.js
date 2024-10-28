function DoubleNumbers(numbers){
    return numbers
        .filter(num => typeof num === 'number')
        .map(num => num * 2)
}

console.log(DoubleNumbers([1, 2, 3, 'a', {}, 4]));
