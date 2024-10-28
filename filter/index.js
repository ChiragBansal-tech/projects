function filterByProperty(array, property, value){
    return array.filter(obj => obj[property] === value);
}

const data = [
    {name: 'John' , age: 25},
    {name: 'Ayush', age: 22},
    {name: 'Aryan', age: 25}
];

console.log(filterByProperty(data, 'age', 25));