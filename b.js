const arr = [32 ,11 ,7 ,23 ,71];

const XYZ = arr.map(diff);

function diff(n){
    if( n <= 13){
        return 13-n;
    }
    else{
        return (n - 13)*2;
    }
}
console.log(XYZ)

