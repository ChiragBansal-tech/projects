const x = [20, 30, 50, 10, 80, 33, 72, 18, 67];
const y = [...x]; 

for (let i = 0; i < x.length; i++) {
    if (x[i] == 50) {
        console.log("True"); 
    }
}
for (let i = 0; i < x.length; i++) {
    
    for (let j = 0; j < y.length; j++) {
        if ((x[i] + y[j] == 50) || (x[i] + y[j] == 100)) {
            console.log("[" + x[i] + "," + y[j] + "]"); 
        }
    }
}


 