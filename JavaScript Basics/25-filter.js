const person =[
    {name: 'John', email: 'james@gmail.com'},
    {name: 'Jane', email: 'jane@gmail.com'},
    {name: 'Mary', email:'mary@gmail.com'},
    {name: 'Peter', email: 'peter@gmail.com'},
    {name: 'Lisa', email: 'lisa@gmail.com'},
    {name: 'Sarah', email:'sarah@gmail.com'},
]

const SLX = person.filter((e)=>{
    return  e.name === 'Lisa';
});

console.log(SLX);