let radius = [2,7,9.23,45,71];
const Pi = 3.14;

const areas = radius.map(area);
const diameters = radius.map(diameter)
const circumferences = radius.map(circumference)

function area(radius){
    return Pi*(radius**2);
}

function diameter(radius){
    return radius*2;
}

function circumference(radius){
    return 2*Pi*radius;
}

console.log(areas);
console.log(diameters);
console.log(circumferences);