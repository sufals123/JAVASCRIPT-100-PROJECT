const person = {
    name: 'John',
    age: 34,
    job: 'Software Engineer',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express.js', 'MongoDB'],
}

function printPerson(person) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.job);
    console.log(person.skills);
    console.log(`My name ${person.name} age ${person.age} i am ${person.job} skills ${person.skills}`);
}

printPerson(person);
