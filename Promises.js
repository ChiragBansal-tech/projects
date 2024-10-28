let abc = new Promise(function(Resolve,Reject){
    let x = [1,2,3,4,5,6,7,8,9];
    const y = x.map(check)
    y.forEach(num => console.log(num))
    function check(x){    
        if(x%2 == 0){
            Resolve("Even");
        }
        else{
            Reject("Odd")
        }
    }    
});


abc.then(
    function(value){
        display(value);
        display(Error);
    }
)
function display(Promise){
    console.log(Promise)
}