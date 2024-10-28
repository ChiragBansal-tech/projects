function createPerson(name , age){
    return{
        getName(){
            return name;
        },
        getAge(){
            return age;
        }
    }
}
function createEmployee(name, age, jobTitle){
    const Person = createPerson(name, age)

    return{
        ...Person,
        getJobTitle(){
            return jobTitle;
        }
    };
}

const employee = createEmployee('John Doe', 18 , 'software developer');

console.log(employee)
console.log(employee.getName())
console.log(employee.getAge())
console.log(employee.getJobTitle())
