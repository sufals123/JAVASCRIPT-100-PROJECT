
// const person = {
//     name: 'jone',
//     age: 25,
//     job: 'programmer',
//     greet: ()=>{
//         console.log(`my name is ${person.name} i am ${person.age} year old i am ${person.job}` );
//     }
// }

// person.greet();


function emp(){
    console.log(`my name is ${this.name} I am ${this.age} years old. I am a ${this.job}`);
}

const employee = {
    name: 'John',
    age: 25,
    job: 'programmer',
    emp,
}

employee.emp(); // Output: my name is John I am 25 years old. I am a programmer



