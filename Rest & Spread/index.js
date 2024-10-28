function mergeObjects(...objects){
    return objects.reduce((acc, obj) => {
        for(let key in obj){
            if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
                acc[key] = mergeObjects(acc[key] || {}, obj[key]);
            }
            else{
                acc[key] = obj[key]
            }
        }
        return acc;
    }, {});
}

const obj1 = { a: 1, b: { x:10 } };
const obj2 = { b: { y: 20 }, c: 3};
const obj3 = { d: 4, b: { x: 30} };

console.log(mergeObjects(obj1, obj2, obj3));