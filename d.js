const x = [1023, 3223, 543, 2352, 1124, 3124, 2341, 2345, 1231, 3221, 3222, 3224];
const y = [...x];

let max = 0;

function fun() {
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < y.length; j++) {
            if (x[i] > max) {
                max = x[i];
            }
            if (y[j] > max) {
                max = y[j];
            }
        }
    }
}

fun();
console.log(max);
