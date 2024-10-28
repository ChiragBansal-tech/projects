function groupBy(array, property){
    return array.reduce((acc, obj) => {
        const key = property.split('.').reduce((o,p) => o &&o[p], obj);
        acc[key] = acc[key] || [];
        acc[key].push(obj);
        return acc;
    },{});
}

const people = [
    { name: 'john', address: {city: 'NEW YORK'} },
    { name: 'jane', address: {city: 'CHICAGO'} },
    { name: 'jin' , address: {city: 'NEW YORK'} }
];

console.log(groupBy(people, 'address.city'));