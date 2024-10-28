const abc = {name: "john" , age: "Doe"};
const xyz = {name: "Ayush" , age: "Rai"};
const pqr = {name: "john" , age: "Doe"};

{
    if((abc.name && abc.age) === (xyz.name && xyz.age)){
    console.log("True1");
    }
    else{
        console.log("False1")
    }
}
{
    if((abc.name && abc.age) === (pqr.name && pqr.age)){
    console.log("True2");
    }
    else{
        console.log("false2")
    }
}
{
    if((xyz.name && xyz.age) === (pqr.name && pqr.age)){
    console.log("True3");
    }
    else{
        console.log("false3")
    }
}